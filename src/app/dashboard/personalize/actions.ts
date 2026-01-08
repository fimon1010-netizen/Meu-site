'use server';

import { z } from 'zod';

export const formSchema = z.object({
  childName: z.string().min(1),
  progressLevel: z.enum(['beginner', 'intermediate', 'advanced']),
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
      description: 'Conteúdo gerado com sucesso.',
      activityContent: 'Esta é uma atividade de exemplo para teste.',
    },
  };
}
