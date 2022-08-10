import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInvitadoDto } from './dto/invitado.dto';
import { InterfaceInvitado } from './interfaces/invitado.interface';
@Injectable()
export class InvitadoService {
  constructor(
    @InjectModel('Invitados') private invitadoModel: Model<InterfaceInvitado>,
  ) {}

  async mostrarTodosLosInvitados(): Promise<any> {
    try {
      return await this.invitadoModel.find({});
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `No se encontraron invitados`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async cargarInvitadoCofirmado(
    invitado: CreateInvitadoDto,
  ): Promise<InterfaceInvitado> {
    try {
      return await this.invitadoModel.create(invitado);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Fue imposible crear el invitado `,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
