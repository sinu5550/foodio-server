import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { PrismaModule } from './prisma/prisma.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { MenuItemModule } from './menu-item/menu-item.module';

@Module({
  imports: [CategoryModule, PrismaModule, CloudinaryModule, MenuItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
