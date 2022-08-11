import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyModule } from './spotify/spotify.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitadoModule } from './invitado/invitado.module';
import { FechaModule } from './fecha/fecha.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/mymongodatabase'),
    SpotifyModule,
    InvitadoModule,
    FechaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
