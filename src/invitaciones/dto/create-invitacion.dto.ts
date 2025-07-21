import { IsNotEmpty, IsString, IsOptional, Matches } from 'class-validator';

export class CreateInvitacionDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)
  nombre: string;

  @IsOptional()
  @IsString()
  imagen?: string; // este no se guarda realmente, pero si querés lo dejamos

  @IsNotEmpty()
  @IsString()
  salon: string;

  @IsNotEmpty()
  @IsString()
  dia: string; // opcional renombrar como fecha, pero si el form usa dia, mantenemos dia

  @IsNotEmpty()
  @IsString()
  hora: string;

  @IsNotEmpty()
  @IsString()
  horaHasta: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @Matches(/^[0-9]+$/)
  telefono: string;

  @IsNotEmpty()
  @IsString()
  temaColor: string;

  @IsOptional()
  @IsString()
  fondoRosa?: string;

  @IsOptional()
  @IsString()
  fondoCeleste?: string;

  @IsOptional()
  @IsString()
  fondoBeige?: string;

  @IsOptional()
  @IsString()
  fondoDibujitos?: string;

  @IsOptional()
  fotoUrl?: string;
}
