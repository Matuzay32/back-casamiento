import { GaleriaInterface } from './interfaces/galeria.interface';
import { GaleriaDto } from './dto/galeria.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class GaleriaService {
  constructor(
    @InjectModel('Galerias') private galeriaModel: Model<GaleriaInterface>,
  ) {}

  async getAll(): Promise<any[]> {
    const created = await this.galeriaModel.create([
      { nombre: 'prueba01' },
      { nombre: 'prueba02' },
    ]);
    return await this.galeriaModel.find({});
  }
}
