import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoanApplicationService } from './loan-application.service';
import { LoanApplicationController } from './loan-application.controller';
import { LoanApplication } from './loan-application.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoanApplication])],
  providers: [LoanApplicationService],
  controllers: [LoanApplicationController],
})
export class LoanApplicationModule {}
