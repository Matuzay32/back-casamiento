import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyModule } from './spotify/spotify.module';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitadoModule } from './invitado/invitado.module';
import { FechaModule } from './fecha/fecha.module';
import { GaleriaModule } from './galeria/galeria.module';
import { FotoCentralModule } from './foto-central/foto-central.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SpotifyController } from './spotify/spotify.controller';
import { InvitadoController } from './invitado/invitado.controller';
import { FechaController } from './fecha/fecha.controller';
import { GaleriaController } from './galeria/galeria.controller';
import { FotoCentralController } from './foto-central/foto-central.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo/mymongodatabase'),
    SpotifyModule,
    InvitadoModule,
    FechaModule,
    GaleriaModule,
    FotoCentralModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

// DESPUES TENGO QUE PROBARLO CON EL TOKEN
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'spotify', method: RequestMethod.GET },
        { path: 'invitado', method: RequestMethod.GET },
        { path: 'spotify', method: RequestMethod.POST },
        { path: 'invitado', method: RequestMethod.POST },
        { path: 'fecha', method: RequestMethod.GET },
        { path: 'fotoCentral', method: RequestMethod.GET },
        { path: 'fotoCentral/uploads/:imagename', method: RequestMethod.GET },
        { path: 'fotoCentral/file', method: RequestMethod.POST },
        { path: 'galeria/files', method: RequestMethod.POST },
        { path: 'galeria', method: RequestMethod.GET },
        { path: 'galeria/uploads/:imagename', method: RequestMethod.GET },
      )
      .forRoutes(
        SpotifyController,
        InvitadoController,
        FechaController,
        GaleriaController,
        FotoCentralController,
      );
  }
}
// export class AppModule {}
