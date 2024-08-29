import { IsNotEmpty } from 'class-validator';
export class ValuationDto {
  @IsNotEmpty()
  vehicleId: number;
}
