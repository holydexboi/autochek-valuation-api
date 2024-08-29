import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Length(17)
  @Column()
  vin: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  make: string;

  @IsNotEmpty()
  @IsString()
  @Column()
  model: string;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  year: number;

  @IsNotEmpty()
  @IsNumber()
  @Column()
  mileage: number;
}