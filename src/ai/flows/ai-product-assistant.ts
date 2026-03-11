'use server';
/**
 * @fileOverview An AI product assistant for AMCO Valves.
 *
 * - aiProductAssistant - A function that handles product inquiries.
 * - AIProductAssistantInput - The input type for the aiProductAssistant function.
 * - AIProductAssistantOutput - The return type for the aiProductAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProductAssistantInputSchema = z.object({
  query: z.string().describe('The user\'s natural language query about AMCO Valve products.'),
});
export type AIProductAssistantInput = z.infer<typeof AIProductAssistantInputSchema>;

const AIProductAssistantOutputSchema = z.object({
  response: z.string().describe('An immediate, accurate summary of product specifications or explanation of usage scenarios.'),
});
export type AIProductAssistantOutput = z.infer<typeof AIProductAssistantOutputSchema>;

export async function aiProductAssistant(input: AIProductAssistantInput): Promise<AIProductAssistantOutput> {
  return aiProductAssistantFlow(input);
}

const productAssistantPrompt = ai.definePrompt({
  name: 'productAssistantPrompt',
  input: {schema: AIProductAssistantInputSchema},
  output: {schema: AIProductAssistantOutputSchema},
  prompt: `You are an AI product assistant for AMCO Valves. Your goal is to help potential customers by providing immediate, accurate summaries of product specifications or explanations of usage scenarios for AMCO Valve products.

AMCO Valves specializes in various types of Ball Valves. The product range includes:
-   **Configurations**: 1 Pc, 2 Pc, 3 Pc
-   **Connection Types**: Screwed, Socket Weld, Butt Weld, Flanged
-   **Seat Types**: Soft Seat, Metal Seat
-   **Mounting Types**: Floating, Trunnion Mounted

When answering, focus on the details of these ball valve types. If the user's question is outside the scope of these specific AMCO Ball Valve products, politely state that you can only assist with AMCO Ball Valve products and their features, configurations, and applications.

User's query: {{{query}}}`,
});

const aiProductAssistantFlow = ai.defineFlow(
  {
    name: 'aiProductAssistantFlow',
    inputSchema: AIProductAssistantInputSchema,
    outputSchema: AIProductAssistantOutputSchema,
  },
  async input => {
    const {output} = await productAssistantPrompt(input);
    return output!;
  }
);
