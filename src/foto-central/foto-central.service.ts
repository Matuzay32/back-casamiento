import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FotoCentralInterface } from '../foto-central/interface/foto-central.interface';
import { Model } from 'mongoose';
import { FotoCentralDto } from './dto/foto-central.dto';

@Injectable()
export class FotoCentralService {
  constructor(
    @InjectModel('FotosCentrales')
    private readonly fotoCentralModel: Model<FotoCentralInterface>,
  ) {}

  //Crea la imagen central
  //Primero borra la anterior luego la crea
  async createImage(
    createCarDto: FotoCentralDto,
  ): Promise<FotoCentralInterface> {
    try {
      await this.fotoCentralModel.deleteMany({});
      return await this.fotoCentralModel.create(createCarDto);
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

  async mostrarImagenCentral() {}
}
