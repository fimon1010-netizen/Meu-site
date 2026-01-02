'use server';

import { z } from 'zod';
import {
  generatePersonalizedContent,
  type PersonalizedLearningContentInput,
  type PersonalizedLearningContentOutput,
} from '@/ai/flows/personalized-learning-content';

export const formSchema = z.object({
  childName: z.string().min(1, 'Nome da criança é obrigatório.'),
  progressLevel: z.string(),
  uniqueNeeds: z.string().min(1, 'Descreva pelo menos uma necessidade ou preferência.'),
  activityType: z.string(),
  topic: z.string().optional(),
});

type ActionResult = {
  success: boolean;
  data?: PersonalizedLearningContentOutput;
  error?: string;
};

export async function generateContentAction(
  values: z.infer<typeof formSchema>
): Promise<ActionResult> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      success: false,
      error: 'Campos inválidos.',
    };
  }

  try {
    const input: PersonalizedLearningContentInput = validatedFields.data;
    const result = await generatePersonalizedContent(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: 'Falha ao gerar conteúdo a partir da IA.',
    };
  }
}
