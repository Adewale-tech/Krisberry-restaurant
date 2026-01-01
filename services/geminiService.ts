
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPizzaRecommendation = async (craving: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User is craving: "${craving}". Based on the Krisberry Pizza Planet brand (Honey Yellow dough, Burnt Orange fusion), suggest a creative pizza description and a fun name. Keep it short and appetizing.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            description: { type: Type.STRING },
            reasoning: { type: Type.STRING }
          }
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Recommendation failed", error);
    return {
      name: "The Cosmic Surprise",
      description: "Our chef's special blend of spices and fresh mozzarella on honey dough.",
      reasoning: "A versatile pick for any craving!"
    };
  }
};
