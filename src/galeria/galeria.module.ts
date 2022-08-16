import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GaleriaController } from './galeria.controller';
import { GaleriaSchema } from './schemas/galeria.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Galerias', schema: GaleriaSchema }]),
  ],
  providers: [GaleriaService],
  controllers: [GaleriaController],
})
export class GaleriaModule {}
