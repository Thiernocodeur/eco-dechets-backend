import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ReportService } from './report.service';
import { Report } from './report.entity';



@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

 

  @Get()
  findAll(): Promise<Report[]> {
    return this.reportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Report> {
    return this.reportService.findOne(id);
  }

  @Post()
  create(@Body() report: Report): Promise<Report> {
    return this.reportService.create(report);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() report: Partial<Report>): Promise<void> {
    return this.reportService.update(id, report);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.reportService.remove(id);
  }
}
export { Controller };

