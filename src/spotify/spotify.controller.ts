import { Controller, Get } from '@nestjs/common';
import { SpotifyService } from './spotify.service';
import { SpotifyInterface } from './interfaces/spotify.interface';

@Controller('spotify')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  getAllSpotify(): Promise<SpotifyInterface[]> {
    return this.spotifyService.getAllSpotify();
  }
}
