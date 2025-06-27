import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { ZodValidationPipe } from '../../common/decorators/validate.dto';
import { GetMunicipio, getmunicipioSchema } from './municipio.dto';

@Controller('municipios')
export class MunicipioController {
  constructor(private readonly service: MunicipioService) {}

  @Post()
  @HttpCode(201)
  async create(
    @Body(new ZodValidationPipe(getmunicipioSchema)) dto: GetMunicipio,
  ) {
    return this.service.getMunicipio(dto);
  }
  @Get()
  @HttpCode(201)
  async getAll() {
    return await this.service.getAll();
  }
}
