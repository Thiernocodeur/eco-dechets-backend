import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Assurez-vous que l'entité User est importée ici
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Exporter UserService si nécessaire
})
export class UserModule {}
