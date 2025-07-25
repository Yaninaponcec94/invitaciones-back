import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invitacion, InvitacionDocument } from './schema/invitacion.schema';
import { CreateInvitacionDto } from './dto/create-invitacion.dto';
import { ResponseInvitacionDto } from './dto/response-invitacion.dto';

@Injectable()
export class InvitacionesService {
  constructor(
    @InjectModel(Invitacion.name) private model: Model<InvitacionDocument>,
  ) {}

  async create(dto: CreateInvitacionDto): Promise<ResponseInvitacionDto> {
    const invitacion = await this.model.create(dto);

    return {
      id: invitacion._id?.toString() ?? '',
      nombre: invitacion.nombre,
      salon: invitacion.salon,
      direccion: invitacion.direccion,
      dia: invitacion.dia,
      hora: invitacion.hora,
      horaHasta: invitacion.horaHasta,
      telefono: invitacion.telefono,
      fotoUrl: invitacion.fotoUrl,
      temaColor: invitacion.temaColor,
      fondoRosa: invitacion.fondoRosa,
      fondoCeleste: invitacion.fondoCeleste,
      fondoBeige: invitacion.fondoBeige,
      fondoDibujitos: invitacion.fondoDibujitos,
    };
  }

  async findOne(id: string): Promise<Invitacion | null> {
    return this.model.findById(id).exec();
  }
}
