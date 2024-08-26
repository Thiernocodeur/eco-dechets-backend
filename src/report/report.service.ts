import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  findAll(): Promise<Report[]> {
    return this.reportRepository.find();
  }

  findOne(id: string): Promise<Report> {
    return this.reportRepository.findOneBy({ id: parseInt(id) });
  }

  async create(report: Report): Promise<Report> {
    return this.reportRepository.save(report);
  }

  async update(id: string, report: Partial<Report>): Promise<void> {
    await this.reportRepository.update(id, report);
  }

  async remove(id: string): Promise<void> {
    await this.reportRepository.delete(id);
  }
}
