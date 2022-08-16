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
      const imagenesCreadas = await this.galeriaModel.create(createCarDto);

      return imagenesCreadas;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Imposible crear auto`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
