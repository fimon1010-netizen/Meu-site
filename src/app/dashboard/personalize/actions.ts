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
  // por enquanto retorna mock para não quebrar o build
  return {
    success: true,
    data: {
      title: 'Atividade de Exemplo',
      description: 'Descrição gerada temporariamente.',
      activityContent: 'Conteúdo da atividade gerado como teste.',
    },
  };
}
