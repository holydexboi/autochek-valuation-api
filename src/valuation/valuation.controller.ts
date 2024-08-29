import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ValuationService } from './valuation.service';
import { Valuation } from './valuation.entity';

@Controller('valuations')
export class ValuationController {
  constructor(private readonly valuationService: ValuationService) {}

  @Post()
  async create(@Body('vehicleId') vehicleId: number): Promise<Valuation> {
    return this.valuationService.estimateValue(vehicleId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Valuation> {
    return this.valuationService.findOne(id);
  }
}