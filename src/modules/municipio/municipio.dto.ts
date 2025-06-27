import { z } from 'zod';

// Schema para criar um pagamento
export const getmunicipioSchema = z.object({
  provincia: z.string(),
});

export type GetMunicipio = z.infer<typeof getmunicipioSchema>;
