import { Body, Controller, Post } from '@nestjs/common';
import { FotoCentralService } from './foto-central.service';
import { FotoCentralDto } from './dto/foto-central.dto';
import { FotoCentralInterface } from './interface/foto-central.interface';
@Controller('fotoCentral')
export class FotoCentralController {
  constructor(private readonly fotoCentralService: FotoCentralService) {}

  @Post()
  createImage(
    @Body() fotoCentral: FotoCentralDto,
  ): Promise<FotoCentralInterface> {
    return this.fotoCentralService.createImage(fotoCentral);
  }
}
