'use server';

/**
 * @fileOverview An AI agent for enhancing property descriptions.
 *
 * - enhancePropertyDescription - A function that enhances a given property description.
 * - EnhancePropertyDescriptionInput - The input type for the enhancePropertyDescription function.
 * - EnhancePropertyDescriptionOutput - The return type for the enhancePropertyDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhancePropertyDescriptionInputSchema = z.object({
  description: z
    .string()
    .describe('The original property description to be enhanced.'),
});
export type EnhancePropertyDescriptionInput = z.infer<
  typeof EnhancePropertyDescriptionInputSchema
>;

const EnhancePropertyDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe('The enhanced property description.'),
});
export type EnhancePropertyDescriptionOutput = z.infer<
  typeof EnhancePropertyDescriptionOutputSchema
>;

export async function enhancePropertyDescription(
  input: EnhancePropertyDescriptionInput
): Promise<EnhancePropertyDescriptionOutput> {
  return enhancePropertyDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhancePropertyDescriptionPrompt',
  input: {schema: EnhancePropertyDescriptionInputSchema},
  output: {schema: EnhancePropertyDescriptionOutputSchema},
  prompt: `You are a real estate marketing expert. Your task is to rewrite property descriptions to be more engaging and appealing to potential buyers.

Original Description: {{{description}}}

Enhanced Description:`,
});

const enhancePropertyDescriptionFlow = ai.defineFlow(
  {
    name: 'enhancePropertyDescriptionFlow',
    inputSchema: EnhancePropertyDescriptionInputSchema,
    outputSchema: EnhancePropertyDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
