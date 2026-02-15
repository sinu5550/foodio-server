import { Module } from '@nestjs/common';
import { MenuItemController } from './menu-item.controller';
import { MenuItemService } from './menu-item.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [PrismaModule, CloudinaryModule],
  controllers: [MenuItemController],
  providers: [MenuItemService],
})
export class MenuItemModule {}
