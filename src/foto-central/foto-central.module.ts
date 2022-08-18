import { Module } from '@nestjs/common';
import { FotoCentralController } from './foto-central.controller';
import { FotoCentralService } from './foto-central.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FotoCentralSchema } from './schema/foto-central.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'FotosCentrales', schema: FotoCentralSchema },
    ]),
  ],
  controllers: [FotoCentralController],
  providers: [FotoCentralService],
})
export class FotoCentralModule {}
