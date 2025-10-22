import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_API_KEY } from '@env';

class GeminiService {
  constructor() {
    this.apiKey = GEMINI_API_KEY;
    this.genAI = null;
    this.initializeAPI();
  }

  initializeAPI() {
    if (this.apiKey && this.apiKey !== 'your_gemini_api_key_here') {
      this.genAI = new GoogleGenerativeAI(this.apiKey);
    }
  }

  async askQuestion(question, modelName = 'gemini-1.5-flash') {
    try {
      if (!this.apiKey || this.apiKey === 'your_gemini_api_key_here') {
        throw new Error('Please configure your Gemini API key in the .env file');
      }

      if (!this.genAI) {
        this.initializeAPI();
      }

      // Get the generative model
      const model = this.genAI.getGenerativeModel({ model: modelName });

      // Configure generation settings
      const generationConfig = {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 2048,
        responseMimeType: "text/plain",
      };

      // Create chat session for context awareness
      const chatSession = model.startChat({
        generationConfig,
        history: [], // Could be extended to maintain conversation history
      });

      // Send message and get response
      const result = await chatSession.sendMessage(question);
      const response = result.response;
      const text = response.text();

      return {
        success: true,
        answer: text,
        model: modelName,
        usage: {
          promptTokens: result.response.usageMetadata?.promptTokenCount || 0,
          completionTokens: result.response.usageMetadata?.candidatesTokenCount || 0,
          totalTokens: result.response.usageMetadata?.totalTokenCount || 0,
        },
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      let errorMessage = 'Failed to get response from AI';
      
      if (error.message) {
        if (error.message.includes('API key not valid')) {
          errorMessage = 'Invalid API key. Please check your Gemini API key.';
        } else if (error.message.includes('quota exceeded') || error.message.includes('rate limit')) {
          errorMessage = 'Rate limit exceeded. Please try again later.';
        } else if (error.message.includes('configure your Gemini API key')) {
          errorMessage = error.message;
        } else if (error.message.includes('safety')) {
          errorMessage = 'Content was filtered for safety. Please try rephrasing your question.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = 'Network error. Please check your internet connection.';
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }

      return {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    }
  }

  async askQuestionWithHistory(question, conversationHistory = [], modelName = 'gemini-1.5-flash') {
    try {
      if (!this.apiKey || this.apiKey === 'your_gemini_api_key_here') {
        throw new Error('Please configure your Gemini API key in the .env file');
      }

      if (!this.genAI) {
        this.initializeAPI();
      }

      const model = this.genAI.getGenerativeModel({ model: modelName });

      const generationConfig = {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 2048,
        responseMimeType: "text/plain",
      };

      // Convert our message format to Gemini format
      const history = conversationHistory.map(msg => ({
        role: msg.isUser ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      const chatSession = model.startChat({
        generationConfig,
        history,
      });

      const result = await chatSession.sendMessage(question);
      const response = result.response;
      const text = response.text();

      return {
        success: true,
        answer: text,
        model: modelName,
        usage: {
          promptTokens: result.response.usageMetadata?.promptTokenCount || 0,
          completionTokens: result.response.usageMetadata?.candidatesTokenCount || 0,
          totalTokens: result.response.usageMetadata?.totalTokenCount || 0,
        },
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Gemini API Error with history:', error);
      return this.askQuestion(question, modelName); // Fallback to simple question
    }
  }

  async getAvailableModels() {
    // Available Gemini models as of current knowledge
    return [
      {
        id: 'gemini-1.5-flash',
        name: 'Gemini 1.5 Flash',
        description: 'Fast and efficient for most tasks'
      },
      {
        id: 'gemini-1.5-flash-8b',
        name: 'Gemini 1.5 Flash 8B',
        description: 'Optimized smaller model for speed'
      },
      {
        id: 'gemini-1.5-pro',
        name: 'Gemini 1.5 Pro',
        description: 'Most capable model for complex tasks'
      },
      {
        id: 'gemini-1.0-pro',
        name: 'Gemini 1.0 Pro',
        description: 'Previous generation, reliable performance'
      }
    ];
  }

  validateApiKey() {
    return this.apiKey && this.apiKey !== 'your_gemini_api_key_here';
  }

  // Helper method to generate content with custom prompts
  async generateContent(prompt, modelName = 'gemini-1.5-flash') {
    try {
      if (!this.genAI) {
        this.initializeAPI();
      }

      const model = this.genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      return {
        success: true,
        content: text,
        model: modelName,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Gemini Content Generation Error:', error);
      return {
        success: false,
        error: error.message || 'Failed to generate content',
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Method to analyze images (if needed in the future)
  async analyzeImage(imageData, prompt = "What's in this image?", modelName = 'gemini-1.5-flash') {
    try {
      if (!this.genAI) {
        this.initializeAPI();
      }

      const model = this.genAI.getGenerativeModel({ model: modelName });

      const imageParts = [
        {
          inlineData: {
            data: imageData,
            mimeType: "image/jpeg"
          }
        }
      ];

      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = response.text();

      return {
        success: true,
        analysis: text,
        model: modelName,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Gemini Image Analysis Error:', error);
      return {
        success: false,
        error: error.message || 'Failed to analyze image',
        timestamp: new Date().toISOString(),
      };
    }
  }
}

export default new GeminiService();