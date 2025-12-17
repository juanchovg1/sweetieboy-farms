import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateRecipeIdea = async (ingredients: string[]): Promise<string> => {
    if (!ai) {
        return "I'm offline right now, but I bet that would taste great roasted with olive oil!";
    }

    try {
        const prompt = `
            I have the following farm-fresh ingredients: ${ingredients.join(', ')}. 
            Suggest a simple, rustic, home-cooked meal recipe name and a very brief (2 sentence) description of how to prepare it. 
            Keep the tone warm, friendly, and enticing like a local farmer suggesting dinner ideas.
            Do not use markdown formatting.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7,
            }
        });

        return response.text || "Couldn't dream up a recipe right now.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Our recipe chef is out to lunch. Try again later!";
    }
};