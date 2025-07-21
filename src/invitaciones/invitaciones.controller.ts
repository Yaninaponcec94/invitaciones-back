import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { InvitacionesService } from './invitaciones.service';
import { CreateInvitacionDto } from './dto/create-invitacion.dto';

@Controller('invitaciones')
export class InvitacionesController {
  constructor(private readonly service: InvitacionesService) {}

  @Post()
  create(@Body() dto: CreateInvitacionDto) {
    return this.service.create(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
