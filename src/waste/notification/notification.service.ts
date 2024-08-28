import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from '../entities/notification/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async findAll(): Promise<Notification[]> {
    return this.notificationRepository.find();
  }

  async findOne(id: number): Promise<Notification> {
    return this.notificationRepository.findOneBy({ id });
  }

  async create(notification: Notification): Promise<Notification> {
    return this.notificationRepository.save(notification);
  }

  async update(id: number, notification: Partial<Notification>): Promise<void> {
    await this.notificationRepository.update(id, notification);
  }

  async remove(id: number): Promise<void> {
    await this.notificationRepository.delete(id);
  }

  // Ajout de la méthode markAsRead
  async markAsRead(id: number): Promise<void> {
    await this.notificationRepository.update(id, { isRead: true });
  }
}
