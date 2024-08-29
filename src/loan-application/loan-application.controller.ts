import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { LoanApplicationService } from './loan-application.service';
import { LoanApplication } from './loan-application.entity';

@Controller('loans')
export class LoanApplicationController {
  constructor(private readonly loanService: LoanApplicationService) {}

  @Post()
  async apply(@Body() loanData: LoanApplication): Promise<LoanApplication> {
    return this.loanService.applyForLoan(loanData);
  }

  @Patch(':id')
  async updateStatus(@Param('id') id: number, @Body('status') status: string): Promise<LoanApplication> {
    return this.loanService.updateStatus(id, status);
  }

  @Get()
  async find(): Promise<LoanApplication[]> {
    return this.loanService.findMany();
  }
}