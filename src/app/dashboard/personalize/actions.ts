'use server';

import { z } from 'zod';

export const formSchema = z.object({
  childName: z.string().min(1),
  progressLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  activityType: z.string(),
  uniqueNeeds: z.string().optional(),
  topic: z.string().optional(),
});

export type GenerateContentResult =
  | { success: true; data: any }
  | { success: false; error: string };

export async function generateContentAction(
  values: z.infer<typeof formSchema>
): Promise<GenerateContentResult> {
  return {
    success: true,
    data: {
      title: 'Atividade de Exemplo',
      description: 'Descrição gerada temporariamente.',
      activityContent: 'Conteúdo de exemplo.',
    },
  };
}
