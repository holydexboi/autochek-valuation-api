
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  async create(@Body() vehicleData: Vehicle): Promise<Vehicle> {

    
    return this.vehicleService.create(vehicleData);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Vehicle> {
    return this.vehicleService.findOne(id);
  }
  @Get()
  async find(): Promise<Vehicle[]> {
    return this.vehicleService.findMany();
  }
}