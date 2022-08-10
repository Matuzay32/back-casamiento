import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpotifySchema } from './schemas/spotify.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Spotifys', schema: SpotifySchema }]),
  ],
})
export class SpotifyModule {}
