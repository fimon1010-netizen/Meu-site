'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized learning content tailored to a child's progress and needs.
 *
 * - generatePersonalizedContent - The main function to generate personalized learning content.
 * - PersonalizedLearningContentInput - The input type for the generatePersonalizedContent function.
 * - PersonalizedLearningContentOutput - The output type for the generatePersonalizedContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLearningContentInputSchema = z.object({
  childName: z.string().describe('The name of the child.'),
  progressLevel: z.string().describe('The current progress level of the child (e.g., beginner, intermediate).'),
  uniqueNeeds: z.string().describe('Any unique learning needs or preferences of the child (e.g., visual learner, prefers hands-on activities, TEA/TDAH considerations).'),
  activityType: z.string().describe('The type of learning activity to generate (e.g., sound association, tracing exercise, visual learning module).'),
  topic: z.string().optional().describe('Optional: The specific topic or subject for the learning content.'),
});
export type PersonalizedLearningContentInput = z.infer<typeof PersonalizedLearningContentInputSchema>;

const PersonalizedLearningContentOutputSchema = z.object({
  title: z.string().describe('The title of the personalized learning content.'),
  description: z.string().describe('A detailed description of the personalized learning content, including instructions and learning objectives.'),
  activityContent: z.string().describe('The actual content of the activity, such as text, exercises, or instructions.'),
});
export type PersonalizedLearningContentOutput = z.infer<typeof PersonalizedLearningContentOutputSchema>;

export async function generatePersonalizedContent(input: PersonalizedLearningContentInput): Promise<PersonalizedLearningContentOutput> {
  return personalizedLearningContentFlow(input);
}

const personalizedLearningContentPrompt = ai.definePrompt({
  name: 'personalizedLearningContentPrompt',
  input: {schema: PersonalizedLearningContentInputSchema},
  output: {schema: PersonalizedLearningContentOutputSchema},
  prompt: `You are an AI assistant designed to create personalized learning content for children, especially those with TEA/TDAH.

  Based on the child's name ({{{childName}}}), progress level ({{{progressLevel}}}), unique needs ({{{uniqueNeeds}}}), and the desired activity type ({{{activityType}}}), generate engaging and effective learning content.

  If a specific topic is provided ({{{topic}}}), incorporate it into the content.

  The learning content should be structured and easy to follow, and appropriate for the child's developmental stage. Focus on stimulating speech and language development through sound, movement and visual association, and fine motor skill development through tracing activities.

  Make use of the color palette: Soft blue (#89CFF0) for calm, light blue (#E5F5FF) for background, and warm yellow (#FFDB58) for interactive elements.

  Output a title, a detailed description and the activity content.
`,
});

const personalizedLearningContentFlow = ai.defineFlow(
  {
    name: 'personalizedLearningContentFlow',
    inputSchema: PersonalizedLearningContentInputSchema,
    outputSchema: PersonalizedLearningContentOutputSchema,
  },
  async input => {
    const {output} = await personalizedLearningContentPrompt(input);
    return output!;
  }
);
