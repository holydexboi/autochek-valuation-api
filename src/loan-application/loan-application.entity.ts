import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { Vehicle } from '../vehicle/vehicle.entity';

@Entity()
export class LoanApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.id)
  vehicle: Vehicle;

  @IsNotEmpty()
  @IsString()
  @Column()
  applicantName: string;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  loanAmount: number;

  @Column({ default: 'Pending' })
  loanStatus: string; // Pending, Approved, Rejected

  @Column()
  createdAt: Date;
}
