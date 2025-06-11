import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyAqYzObls24w0pGO0WjhMicery6R22nfn0';

if (!API_KEY) {
  console.error(
    'Gemini API key is missing. Please set REACT_APP_GEMINI_API_KEY in your .env file.'
  );
}

const genAI = new GoogleGenerativeAI(API_KEY);

export const generateContent = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    throw new Error('API Key not configured.');
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (error) {
    console.error('Error generating content:', error);
    throw new Error('Failed to generate content from AI.');
  }
};
