import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InvitadoController } from './invitado.controller';
import { InvitadoService } from './invitado.service';
import { InvitadoSchema } from './schemas/invitado.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Invitados', schema: InvitadoSchema }]),
  ],
  controllers: [InvitadoController],
  providers: [InvitadoService],
})
export class InvitadoModule {}
