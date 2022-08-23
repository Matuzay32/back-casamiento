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
import { FotoCentralService } from './foto-central/foto-central.service';
import { FotoCentralController } from './foto-central/foto-central.controller';
import { FotoCentralModule } from './foto-central/foto-central.module';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { SpotifyController } from './spotify/spotify.controller';
import { InvitadoController } from './invitado/invitado.controller';
import { FechaController } from './fecha/fecha.controller';

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
        { path: 'spotify', method: RequestMethod.POST },
        { path: 'invitado', method: RequestMethod.POST },
        { path: 'fecha', method: RequestMethod.GET },
        // { path: 'cars', method: RequestMethod.GET },
        // 'cars/findAll/name',
        // { path: 'cars', method: RequestMethod.GET },
        // 'cars/findOneForId/(.*)',
        // { path: 'cars', method: RequestMethod.GET },
        // 'cars/uploads/(.*)',
        // { path: 'cars', method: RequestMethod.POST },
        // 'cars/files',
      )
      .forRoutes(SpotifyController, InvitadoController, FechaController);
  }
}
// export class AppModule {}
