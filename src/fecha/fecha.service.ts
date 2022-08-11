import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FechaInterface } from '../fecha/interface/fecha.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FechaDto } from './dto/fecha.dto';

@Injectable()
export class FechaService {
  constructor(
    @InjectModel('Fechas') private fechaModel: Model<FechaInterface>,
  ) {}

  async obtenerFecha(): Promise<FechaInterface> {
    try {
      return await this.fechaModel.findOne({});
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Fue imposible mostrar la fecha `,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
  async cargarFecha(fecha: FechaDto): Promise<FechaInterface> {
    try {
      await this.fechaModel.deleteMany({});
      return await this.fechaModel.create(fecha);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Fue imposible cambiar la fecha',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
