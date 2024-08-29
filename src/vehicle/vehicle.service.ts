import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async create(vehicleData: Vehicle): Promise<Vehicle> {
    return this.vehicleRepository.save(vehicleData);
  }

  async findOne(id: number): Promise<Vehicle> {
    return this.vehicleRepository.findOne({ where: { id } });
  }
  async findMany(): Promise<Vehicle[]> {
    return this.vehicleRepository.find({ });
  }
}