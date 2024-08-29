import { IsEmail, IsNotEmpty } from 'class-validator';
export class VehicleDto {
  id: number;

  @IsEmail()
  @IsNotEmpty()
  vin: string;

  @IsNotEmpty()
  make: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  mileage: number;
}
