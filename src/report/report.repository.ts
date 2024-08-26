import { EntityRepository, Repository } from 'typeorm';
import { Report } from './report.entity';

@EntityRepository(Report)
export class ReportRepository extends Repository<Report> {
  // Vous pouvez ajouter des méthodes personnalisées ici

  async findReportsByCriteria(criteria: any): Promise<Report[]> {
    return this.find({ where: criteria });
  }

  // Exemple de méthode pour chercher un rapport par un critère spécifique
  async findOneByTitle(title: string): Promise<Report | undefined> {
    return this.findOne({ where: { title } });
  }
}
