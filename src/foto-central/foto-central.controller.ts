import { Controller } from '@nestjs/common';
import { FotoCentralService } from './foto-central.service';

@Controller('foto-central')
export class FotoCentralController {
  constructor(private readonly fotoCentralService: FotoCentralService) {}
}
