import { GoogleGenerativeAI } from '@google/generative-ai';
import { College } from '../types';

const API_KEY = process.env.GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(API_KEY);

export async function fetchCollegeData(name: string): Promise<College | null> {
  if (!API_KEY) {
    console.warn('GEMINI_API_KEY not set. Using fallback data.');
    return null;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Give me admission statistics for ${name} as JSON with fields: acceptanceRate (number), medianGpa (number), satRange (two numbers), actRange (two numbers)`;
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return JSON.parse(text) as College;
  } catch (err) {
    console.error('Gemini API error:', err);
    return null;
  }
}
