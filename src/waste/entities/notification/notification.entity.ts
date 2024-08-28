import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  isRead: boolean;  // Ajoutez cette colonne pour suivre si la notification est lue

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
