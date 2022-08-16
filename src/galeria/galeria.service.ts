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

  async createImage(createCarDto: GaleriaDto): Promise<GaleriaInterface> {
    try {
      await this.galeriaModel.deleteMany({});
      return await this.galeriaModel.create(createCarDto);
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Imposible crear foto`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async ObtenerImagenesGaleria(): Promise<GaleriaInterface[]> {
    try {
      return await this.galeriaModel.find({});
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Fue imposible mostrar las fotos',
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
