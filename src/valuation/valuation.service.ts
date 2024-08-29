import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Valuation } from './valuation.entity';
import { Vehicle } from '../vehicle/vehicle.entity';
import axios from 'axios';

@Injectable()
export class ValuationService {
  constructor(
    @InjectRepository(Valuation)
    private valuationRepository: Repository<Valuation>,
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async estimateValue(vehicleId: number): Promise<Valuation> {
    const vehicle = await this.vehicleRepository.findOne({
      where: { id: vehicleId },
    });

    const valuation = await this.valuationRepository.findOne({
      where: { vehicle: { id: vehicleId } },
    });
    if (valuation) {
      return this.valuationRepository.save(valuation);
    }

    const estimatedValue = this.estimateVehicleValue(vehicle);
    const newValuation = this.valuationRepository.create({
      vehicle,
      estimatedValue,
      createdAt: new Date(),
    });

    return this.valuationRepository.save(newValuation);
  }

  async findOne(id: number): Promise<Valuation> {
    return this.valuationRepository.findOne({ where: { id } });
  }

  estimateVehicleValue(vehicle: any): number {
    // Base price for a new vehicle
    let baseValue = 20000;

    // Adjust based on the year
    const currentYear = new Date().getFullYear();
    const vehicleAge = currentYear - vehicle.year;

    if (vehicleAge <= 1) {
      baseValue += 5000;
    } else if (vehicleAge <= 3) {
      baseValue += 3000;
    } else if (vehicleAge <= 5) {
      baseValue -= 2000;
    } else {
      baseValue -= 5000;
    }

    if (vehicle.mileage) {
      if (vehicle.mileage < 15000) {
        baseValue += 2000; // Low mileage premium
      } else if (vehicle.mileage < 50000) {
        baseValue -= 1000; // Slightly higher mileage, slight reduction
      } else if (vehicle.mileage < 100000) {
        baseValue -= 3000; // High mileage, moderate reduction
      } else {
        baseValue -= 5000; // Very high mileage, significant reduction
      }
    }
    return baseValue
  }
}
