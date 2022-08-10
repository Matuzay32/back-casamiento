import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSpotifyDto } from './dto/spotify.dto';
import { SpotifyInterface } from './interfaces/spotify.interface';

@Injectable()
export class SpotifyService {
  constructor(
    @InjectModel('Spotifys') private spotifyModel: Model<SpotifyInterface>,
  ) {}

  async motrarLinksSpotify(): Promise<any> {
    try {
      return await this.spotifyModel.find({});
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `No se encontraron links de spotify`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async cargarLinksSpotify(
    likCancion: CreateSpotifyDto,
  ): Promise<SpotifyInterface> {
    try {
      return await this.spotifyModel.create(likCancion);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Fue imposible crear el link`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
