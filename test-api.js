// Quick test to verify the API key works with Google Generative AI
import { GoogleGenAI } from '@google/genai';

const API_KEY = 'AIzaSyAHCfhbiuRW1cEI1cp5Kb2V-cPCT4Nz91c';

async function testAPI() {
  try {
    console.log('Testing API key...');
    const ai = new GoogleGenAI({ apiKey: API_KEY });

    console.log('Attempting to connect to live API...');
    const session = await ai.live.connect({
      model: 'gemini-2.5-flash-native-audio-preview-12-2025',
      callbacks: {
        onopen: () => {
          console.log('✅ Connection successful!');
          process.exit(0);
        },
        onerror: (error) => {
          console.error('❌ Connection error:', error);
          process.exit(1);
        },
        onclose: (event) => {
          console.log('Connection closed:', event);
          process.exit(1);
        }
      },
      config: {
        responseModalities: ['AUDIO']
      }
    });

    console.log('Session created:', session);
  } catch (error) {
    console.error('❌ Failed to create session:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    process.exit(1);
  }
}

testAPI();
