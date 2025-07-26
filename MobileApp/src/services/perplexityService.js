import axios from 'axios';
import { PERPLEXITY_API_KEY } from '@env';

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

class PerplexityService {
  constructor() {
    this.apiKey = PERPLEXITY_API_KEY;
    this.client = axios.create({
      baseURL: PERPLEXITY_API_URL,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      timeout: 30000, // 30 seconds timeout
    });
  }

  async askQuestion(question, model = 'llama-3.1-sonar-small-128k-online') {
    try {
      if (!this.apiKey || this.apiKey === 'your_perplexity_api_key_here') {
        throw new Error('Please configure your Perplexity API key in the .env file');
      }

      const response = await this.client.post('', {
        model: model,
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant. Provide accurate, informative, and concise answers. When possible, include relevant sources or references.'
          },
          {
            role: 'user',
            content: question
          }
        ],
        max_tokens: 1000,
        temperature: 0.2,
        top_p: 0.9,
        stream: false
      });

      return {
        success: true,
        answer: response.data.choices[0].message.content,
        model: response.data.model,
        usage: response.data.usage,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('Perplexity API Error:', error);
      
      let errorMessage = 'Failed to get response from AI';
      
      if (error.response) {
        // Server responded with error status
        switch (error.response.status) {
          case 401:
            errorMessage = 'Invalid API key. Please check your Perplexity API key.';
            break;
          case 429:
            errorMessage = 'Rate limit exceeded. Please try again later.';
            break;
          case 400:
            errorMessage = 'Invalid request. Please check your question.';
            break;
          default:
            errorMessage = `Server error: ${error.response.status}`;
        }
      } else if (error.request) {
        // Network error
        errorMessage = 'Network error. Please check your internet connection.';
      } else if (error.message.includes('configure your Perplexity API key')) {
        errorMessage = error.message;
      }

      return {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    }
  }

  async getAvailableModels() {
    // Available Perplexity models as of current knowledge
    return [
      {
        id: 'llama-3.1-sonar-small-128k-online',
        name: 'Llama 3.1 Sonar Small (Online)',
        description: 'Fast and efficient with web search capabilities'
      },
      {
        id: 'llama-3.1-sonar-large-128k-online',
        name: 'Llama 3.1 Sonar Large (Online)', 
        description: 'More powerful with web search capabilities'
      },
      {
        id: 'llama-3.1-sonar-huge-128k-online',
        name: 'Llama 3.1 Sonar Huge (Online)',
        description: 'Most powerful with web search capabilities'
      }
    ];
  }

  validateApiKey() {
    return this.apiKey && this.apiKey !== 'your_perplexity_api_key_here';
  }
}

export default new PerplexityService();