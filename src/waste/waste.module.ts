import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuideService } from './guide/guide.service';
import { NotificationService } from './notification/notification.service';
import { GuideController } from './guide/guide.controller';
import { NotificationController } from './notification/notification.controller';
import { Guide } from './entities/guide/guide.entity';
import { Notification } from './entities/notification/notification.entity';  // Importation de l'entité Notification

@Module({
  imports: [
    TypeOrmModule.forFeature([Guide, Notification]),  // Ajoutez Notification ici
  ],
  providers: [GuideService, NotificationService],
  controllers: [GuideController, NotificationController],
})
export class WasteModule {}
