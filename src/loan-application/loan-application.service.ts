import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoanApplication } from './loan-application.entity';

@Injectable()
export class LoanApplicationService {
  constructor(
    @InjectRepository(LoanApplication)
    private loanRepository: Repository<LoanApplication>,
  ) {}

  async applyForLoan(loanData: LoanApplication): Promise<LoanApplication> {
    loanData.loanStatus = this.checkEligibility(loanData)
      ? 'Approved'
      : 'Rejected';
    loanData.createdAt = new Date();
    return this.loanRepository.save(loanData);
  }

  async updateStatus(id: number, status: string): Promise<LoanApplication> {
    const loan = await this.loanRepository.findOne({ where: { id } });
    loan.loanStatus = status;
    return this.loanRepository.save(loan);
  }

  async findMany(): Promise<LoanApplication[]> {
    return await this.loanRepository.find();
  }

  private checkEligibility(loanData: LoanApplication): boolean {
    // Implement loan eligibility logic here (e.g., loanAmount <= estimatedValue)
    return loanData.loanAmount <= 50000; 
  }
}
