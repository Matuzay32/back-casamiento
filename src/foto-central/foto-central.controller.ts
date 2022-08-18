import {
  Headers,
  Controller,
  Get,
  Post,
  Param,
  Res,
  HttpStatus,
  Body,
  UploadedFiles,
  UseInterceptors,
  HttpVersionNotSupportedException,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { AnyFilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { of } from 'rxjs';
import { join } from 'path/posix';
import { FotoCentralService } from './foto-central.service';
import { FotoCentralDto } from './dto/foto-central.dto';
import { FotoCentralInterface } from './interface/foto-central.interface';
@Controller('fotoCentral')
export class FotoCentralController {
  constructor(private readonly fotoCentralService: FotoCentralService) {}
  //CREA LA IMAGEN CENTRAL
  @Post()
  createImage(
    @Body() fotoCentral: FotoCentralDto,
  ): Promise<FotoCentralInterface> {
    return this.fotoCentralService.createImage(fotoCentral);
  }
  //MUESTRA LA IMAGEN CENTRAL
  @Get()
  mostrarImagenCentral(): Promise<FotoCentralInterface> {
    return this.fotoCentralService.mostrarImagenCentral();
  }

  //OBTENGO LA IMAGEN DE LA CARPETA UPLOADS

  @Get('uploads/:imagename')
  findProfileImage(@Param() params, @Res() res) {
    const { imagename } = params;

    return of(res.sendFile(join(process.cwd(), `uploads/${imagename}`)));
  }

  //UPLOAD ONE FILE
  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          callback(null, `${uuidv4()}.jpg`);
        },
      }),
      fileFilter: (req, file, callback) => {
        const nameOriginal = file.originalname.toLocaleLowerCase();
        // //console.log(nameOriginal);
        if (!nameOriginal.match(/(.gif|.png|.jpg|.jpeg)$/)) {
          return callback(
            new HttpVersionNotSupportedException({
              status: HttpStatus.NOT_FOUND,
              error: `El archivo tiene una extension no valida, validas: gif png jpg jpeg`,
            }),
            false,
          );
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFiles() file: Express.Multer.File) {
    return {
      nombre: file.filename,
    };
  }
}
