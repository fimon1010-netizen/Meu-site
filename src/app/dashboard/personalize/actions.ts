'use server';

import { z } from 'zod';

export const formSchema = z.object({
  childName: z.string().min(1),
  progressLevel: z.string(),
  uniqueNeeds: z.string().optional(),
  activityType: z.string(),
  topic: z.string().optional(),
});

export async function generateContentAction(
  values: z.infer<typeof formSchema>
) {
  return {
    success: true,
    data: {
      title: 'Atividade de Exemplo',
      description: 'Descrição gerada de forma estática.',
      activityContent: 'Conteúdo de exemplo.',
    },
  };
}
