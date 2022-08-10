import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotifySchema } from './schemas/spotify.schema';
import { SpotifyService } from './spotify.service';

import { SpotifyController } from './spotify.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Spotifys', schema: SpotifySchema }]),
  ],
  controllers: [SpotifyController],
  providers: [SpotifyService],
})
export class SpotifyModule {}
