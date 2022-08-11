import { Body, Controller, Get, Post } from '@nestjs/common';
import { FechaService } from './fecha.service';
import { FechaDto } from './dto/fecha.dto';
import { FechaInterface } from './interface/fecha.interface';

@Controller('fecha')
export class FechaController {
  constructor(private readonly fechaService: FechaService) {}
  @Get()
  obtenerFecha(): Promise<FechaInterface> {
    return this.fechaService.obtenerFecha();
  }

  @Post()
  cargarFecha(@Body() fechaDto: FechaDto): Promise<FechaInterface> {
    return this.fechaService.cargarFecha(fechaDto);
  }
}
