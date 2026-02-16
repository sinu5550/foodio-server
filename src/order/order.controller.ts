import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Req() req,
    @Body()
    data: {
      customerName: string;
      customerAddress: string;
      totalAmount: number;
      items: { menuItemId: string; quantity: number; price: number }[];
    },
  ) {
    console.log('Order Create Request User:', req.user);
    return this.orderService.create({
      ...data,
      userId: req.user.userId,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  findMyOrders(@Req() req) {
    return this.orderService.findByUser(req.user.userId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: OrderStatus) {
    return this.orderService.updateStatus(id, status);
  }
}
