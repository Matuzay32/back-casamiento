import { Controller, Body, Get, Post } from '@nestjs/common';
import { InvitadoService } from './invitado.service';
import { InterfaceInvitado } from '../invitado/interfaces/invitado.interface';
import { CreateInvitadoDto } from './dto/invitado.dto';

@Controller('invitado')
export class InvitadoController {
  constructor(private readonly invitadoService: InvitadoService) {}
  @Get()
  mostrarTodosLosInvitados(): Promise<InterfaceInvitado[]> {
    return this.invitadoService.mostrarTodosLosInvitados();
  }
  @Post()
  cargarInvitadoCofirmado(
    @Body() invitado: CreateInvitadoDto,
  ): Promise<InterfaceInvitado> {
    return this.invitadoService.cargarInvitadoCofirmado(invitado);
  }
}
