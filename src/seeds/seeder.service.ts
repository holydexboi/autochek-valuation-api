import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanApplication } from '../loan-application/loan-application.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Injectable()
export class Seeder {
  constructor(
    @InjectRepository(LoanApplication)
    private readonly loanApplicationRepository: Repository<LoanApplication>,
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async seed() {
    await this.createVehicles();
    await this.createLoanApplications();
  }

  private async createVehicles() {
    const vehicles = [
      { vin: '5YGCM8236D3674383', make: 'Toyota', model: 'Camry', year: 2020, mileage: 10000 },
      { vin: 'S27E369S7ZA70U84S', make: 'Honda', model: 'Civic', year: 2019, mileage: 15000 },
      {
        vin: '1HGCM82633A004352',
        make: 'Honda',
        model: 'Accord',
        year: 2010,
        mileage: 75000,
      },
      {
        vin: '1J4FA69S7WP755306',
        make: 'Jeep',
        model: 'Wrangler',
        year: 2015,
        mileage: 60000,
      },
    
    ];

    for (const vehicle of vehicles) {
      await this.vehicleRepository.save(vehicle);
    }
  }

  private async createLoanApplications() {
    const loanApplications = [
      {
        vehicle: { id: 1 },
        applicantName: 'John Doe',
        loanAmount: 5000,
        loanStatus: 'Pending',
        createdAt: new Date(),
      },
      {
        vehicle: { id: 2 },
        applicantName: 'Jane Smith',
        loanAmount: 10000,
        loanStatus: 'Approved',
        createdAt: new Date(),
      },
      {
        vehicle: { id: 3 },
        applicantName: 'Michael Johnson',
        loanAmount: 7000,
        loanStatus: 'Rejected',
        createdAt: new Date(),
      },
      
    ];

    await this.loanApplicationRepository.save(loanApplications);
  }
}
