import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuItemService } from './menu-item.service';

@Controller('menu-item')
export class MenuItemController {
  constructor(private readonly menuItemService: MenuItemService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('categoryId') categoryId: string,
    @Body('isAvailable') isAvailable: string | boolean,
  ) {
    return this.menuItemService.create({
      name,
      description,
      price,
      categoryId,
      isAvailable,
      file,
    });
  }

  @Get()
  findAll() {
    return this.menuItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuItemService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image'))
  update(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
    @Body('categoryId') categoryId: string,
    @Body('isAvailable') isAvailable: string | boolean,
  ) {
    return this.menuItemService.update(id, {
      name,
      description,
      price,
      categoryId,
      isAvailable,
      file,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuItemService.remove(id);
  }
}
