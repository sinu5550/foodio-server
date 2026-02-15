import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class MenuItemService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) {}

  async create(data: {
    name: string;
    description?: string;
    price: number;
    categoryId: string;
    isAvailable?: string | boolean;
    file: Express.Multer.File;
  }) {
    
    let imageUrl = null;
    if (data.file) {
      const upload = await this.cloudinary.uploadImage(data.file);
      imageUrl = upload.secure_url;
    }

    
    return this.prisma.menuItem.create({
      data: {
        name: data.name,
        description: data.description,
        price: Number(data.price), 
        image: imageUrl,
        categoryId: data.categoryId,
        isAvailable:
          data.isAvailable === 'false' || data.isAvailable === false
            ? false
            : true,
      },
    });
  }

  async findAll() {
    return this.prisma.menuItem.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.menuItem.findUnique({
      where: { id },
      include: { category: true },
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      price?: number;
      categoryId?: string;
      isAvailable?: string | boolean;
      file?: Express.Multer.File;
    },
  ) {
    let imageUrl = undefined;
    if (data.file) {
      const upload = await this.cloudinary.uploadImage(data.file);
      imageUrl = upload.secure_url;
    }

    return this.prisma.menuItem.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price ? Number(data.price) : undefined,
        categoryId: data.categoryId,
        image: imageUrl,
        isAvailable:
          data.isAvailable !== undefined
            ? data.isAvailable === 'false' || data.isAvailable === false
              ? false
              : true
            : undefined,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.menuItem.delete({
      where: { id },
    });
  }
}
