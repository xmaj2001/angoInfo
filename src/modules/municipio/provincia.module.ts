import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './provincia.controller';
import { DatabaseService } from '../../database/database.service';

@Module({
  controllers: [MunicipioController],
  providers: [MunicipioService, DatabaseService],
})
export class MunicipioModule {}
