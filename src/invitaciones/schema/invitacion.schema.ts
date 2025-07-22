import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InvitacionDocument = Invitacion & Document;

@Schema({ timestamps: true })
export class Invitacion {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  salon: string;

  @Prop({ required: true })
  direccion: string;

  @Prop()
  fecha?: string;

  @Prop()
  hora?: string;

  @Prop()
  horaHasta?: string;

  @Prop()
  telefono?: string;

  @Prop()
  fotoUrl?: string;

  @Prop()
  temaColor?: string;

  @Prop()
  fondoRosa?: string;

  @Prop()
  fondoCeleste?: string;

  @Prop()
  fondoBeige?: string;

  @Prop()
  fondoDibujitos?: string;
}

export const InvitacionSchema = SchemaFactory.createForClass(Invitacion);
