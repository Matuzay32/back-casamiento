import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyService } from './spotify/spotify.service';
import { SpotifyController } from './spotify/spotify.controller';
import { SpotifyModule } from './spotify/spotify.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitadoService } from './invitado/invitado.service';
import { InvitadoController } from './invitado/invitado.controller';
import { InvitadoModule } from './invitado/invitado.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/mymongodatabase'),
    SpotifyModule,
    InvitadoModule,
  ],
  controllers: [AppController, InvitadoController],
  providers: [AppService, InvitadoService],
})
export class AppModule {}
