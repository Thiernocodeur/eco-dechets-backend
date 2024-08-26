import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportController } from './report/report.controller';
import { ReportService } from './report/report.service';
import { Report } from './report/report.entity';
import { ReportRepository } from './report/report.repository';

@Module({
  imports: [
    ConfigModule.forRoot(), // Charge les variables d'environnement
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/../dist/**/*.entity{.ts,.js}'], // Mise à jour pour les fichiers .js
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    
    TypeOrmModule.forFeature([Report, ReportRepository]), // Import des entités et repository
  ],
  controllers: [AppController, ReportController],
  providers: [AppService, ReportService],
})
export class AppModule {}
