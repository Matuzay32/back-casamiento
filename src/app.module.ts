import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyService } from './spotify/spotify.service';
import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyModule } from './spotify/spotify.module';

@Module({
  imports: [SpotifyModule],
  controllers: [AppController, SpotifyController],
  providers: [AppService, SpotifyService],
})
export class AppModule {}
