import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitacionesService } from './invitaciones.service';
import { InvitacionesController } from './invitaciones.controller';
import { Invitacion, InvitacionSchema } from './schema/invitacion.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Invitacion.name,
        schema: InvitacionSchema,
      },
    ]),
  ],
  controllers: [InvitacionesController],
  providers: [InvitacionesService],
})
export class InvitacionesModule {}
