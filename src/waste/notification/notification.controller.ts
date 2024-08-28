import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Notification } from '../entities/notification/notification.entity';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  findAll() {
    return this.notificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.notificationService.findOne(id);
  }

  @Post()
  create(@Body() notification: Notification) {
    return this.notificationService.create(notification);
  }

  @Put(':id/read')
  markAsRead(@Param('id') id: number) {
    return this.notificationService.markAsRead(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.notificationService.remove(id);
  }
}
