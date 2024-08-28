import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GuideService } from './guide.service';
import { Guide } from '../entities/guide/guide.entity';

@Controller('guides')
export class GuideController {
  constructor(private readonly guideService: GuideService) {}

  @Get()
  findAll() {
    return this.guideService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.guideService.findOne(id);
  }

  @Post()
  create(@Body() guide: Guide) {
    return this.guideService.create(guide);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() guide: Partial<Guide>) {
    return this.guideService.update(id, guide);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.guideService.remove(id);
  }
}
