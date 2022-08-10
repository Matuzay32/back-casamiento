import { Body, Controller, Get, Post } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { SpotifyInterface } from './interfaces/spotify.interface';
import { CreateSpotifyDto } from './dto/spotify.dto';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  motrarLinksSpotify(): Promise<SpotifyInterface[]> {
    return this.spotifyService.motrarLinksSpotify();
  }

  @Post()
  cargarLinksSpotify(
    @Body() likCancion: CreateSpotifyDto,
  ): Promise<SpotifyInterface> {
    return this.spotifyService.cargarLinksSpotify(likCancion);
  }
}
