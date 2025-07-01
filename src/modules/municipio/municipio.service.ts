import { Injectable } from '@nestjs/common';
import { GetMunicipio } from './municipio.dto';
import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';

@Injectable()
export class MunicipioService {
  constructor() {}

  async getAll() {
    try {
      const { object } = await generateObject({
        model: google('models/gemini-2.0-flash-exp'),
        schema: z.object({
          provinces: z.array(z.string()),
        }),
        prompt:
          'Please provide an up-to-date list of all provinces in Angola, based on the most recent data available. Please include the name of the province, its capital and the source of the data used.',
      });
      return { success: false, message: 'Dados obtidos com sucesso', object };
    } catch (error) {
      return { success: false, message: `${error}` };
    }
  }

  async getMunicipio(data: GetMunicipio) {
    try {
      const { object } = await generateObject({
        model: google('models/gemini-2.0-flash-exp'),
        schema: z.object({
          municipios: z.array(z.string()),
        }),
        prompt: `Please provide an up-to-date list of all municipalities in ${data.provincia} , Angola, based on the most recent data available. Include the name of the province, its capital and the source of the data used.`,
      });
      return {
        success: true,
        message: 'Dados obtidos com sucessoxx',
        object,
      };
    } catch (error) {
      return { success: false, message: `${error}` };
    }
  }
}
