import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WasteModule } from './waste/waste.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Charge les variables d'environnement
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/../dist/**/*.entity{.ts,.js}'], // Mise à jour pour les fichiers .js
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    WasteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
