import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class Valuation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicle: Vehicle;

  @Column()
  estimatedValue: number;

  @Column()
  createdAt: Date;
}