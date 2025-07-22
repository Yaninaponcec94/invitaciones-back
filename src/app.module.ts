import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { InvitacionesModule } from './invitaciones/invitaciones.module'; //comentario
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    InvitacionesModule,
  ],
})
export class AppModule {}
