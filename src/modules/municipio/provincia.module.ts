import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './provincia.controller';

@Module({
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
