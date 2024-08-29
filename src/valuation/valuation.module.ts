import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValuationController } from './valuation.controller';
import { ValuationService } from './valuation.service';
import { Valuation } from './valuation.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Valuation, Vehicle])],
  providers: [ValuationService],
  controllers: [ValuationController],
})
export class ValuationModule {}
