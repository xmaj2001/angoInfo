import { Module } from '@nestjs/common';
import { MunicipioModule } from './modules/municipio/provincia.module';
@Module({
  imports: [MunicipioModule],
  providers: [],
})
export class AppModule {}
