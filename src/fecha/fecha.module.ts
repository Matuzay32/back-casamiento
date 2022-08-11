import { Module } from '@nestjs/common';
import { FechaService } from './fecha.service';
import { FechaController } from './fecha.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FechaSchema } from './schema/fecha.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Fechas', schema: FechaSchema }]),
  ],
  providers: [FechaService],
  controllers: [FechaController],
})
export class FechaModule {}
