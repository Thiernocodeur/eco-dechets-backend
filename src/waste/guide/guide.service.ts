import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guide } from '../entities/guide/guide.entity';

@Injectable()
export class GuideService {
  constructor(
    @InjectRepository(Guide)
    private readonly guideRepository: Repository<Guide>,
  ) {}

  async findAll(): Promise<Guide[]> {
    return this.guideRepository.find();
  }

  async findOne(id: number): Promise<Guide> {
    return this.guideRepository.findOneBy({ id });
  }

  async create(guide: Guide): Promise<Guide> {
    return this.guideRepository.save(guide);
  }

  async update(id: number, guide: Partial<Guide>): Promise<void> {
    await this.guideRepository.update(id, guide);
  }

  async remove(id: number): Promise<void> {
    await this.guideRepository.delete(id);
  }
}
