import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vehicle } from './vehicle/vehicle.entity';
import { Valuation } from './valuation/valuation.entity';
import { LoanApplication } from './loan-application/loan-application.entity';
import { VehicleController } from './vehicle/vehicle.controller';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { ValuationModule } from './valuation/valuation.module';
import { Seeder } from './seeds/seeder.service';
import { LoanApplicationController } from './loan-application/loan-application.controller';
import { LoanApplicationModule } from './loan-application/loan-application.module';
import { LoanApplicationService } from './loan-application/loan-application.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      entities: [Vehicle, Valuation, LoanApplication],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Vehicle, Valuation, LoanApplication]),
    VehicleModule,
    ValuationModule,
    LoanApplicationModule,
  ],
  controllers: [VehicleController, LoanApplicationController],
  providers: [VehicleService, LoanApplicationService, Seeder],
})
export class AppModule {}
