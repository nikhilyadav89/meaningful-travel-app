# 🤖 Perplexity AI Integration Setup Guide

This guide will help you set up the Perplexity AI integration in your mobile app.

## 📋 Prerequisites

1. **Perplexity AI Account**: Sign up at [perplexity.ai](https://www.perplexity.ai)
2. **API Access**: Get API access from [Perplexity Settings](https://www.perplexity.ai/settings/api)

## 🔑 Getting Your API Key

1. **Sign up or log in** to Perplexity AI
2. Navigate to **Settings > API**
3. **Generate a new API key**
4. **Copy the API key** (you won't be able to see it again)

## ⚙️ Configuration

### Step 1: Add API Key to Environment

1. Open the `.env` file in your project root
2. Replace the placeholder with your actual API key:

```env
# Replace this line
PERPLEXITY_API_KEY=your_perplexity_api_key_here

# With your actual API key
PERPLEXITY_API_KEY=pplx-abc123def456ghi789...
```

### Step 2: Restart the Development Server

After updating the `.env` file, restart your development server:

```bash
npm start -- --clear
```

The `--clear` flag ensures the new environment variables are loaded.

## 🚀 Testing the Integration

### Quick Test
1. Open your app
2. Navigate to **AI Assistant** from the home screen or settings
3. Try one of the suggested questions or ask your own
4. You should see the AI respond within a few seconds

### Sample Questions to Try
- "What's the latest news in technology?"
- "Explain quantum computing in simple terms"
- "What are the best practices for mobile app development?"
- "How does machine learning work?"

## 🛠️ Available Models

The app supports three Perplexity models:

- **Small**: Fast and efficient (`llama-3.1-sonar-small-128k-online`)
- **Large**: More powerful (`llama-3.1-sonar-large-128k-online`)
- **Huge**: Most capable (`llama-3.1-sonar-huge-128k-online`)

Default is set to **Small** for optimal performance and cost.

## 🔧 Troubleshooting

### API Key Not Working
- **Error**: "Invalid API key"
- **Solution**: 
  1. Double-check your API key in the `.env` file
  2. Ensure there are no extra spaces or characters
  3. Verify the key is active in your Perplexity dashboard

### Network Errors
- **Error**: "Network error. Please check your internet connection."
- **Solution**:
  1. Check your internet connection
  2. Try again in a few moments
  3. Verify Perplexity API status

### Rate Limiting
- **Error**: "Rate limit exceeded"
- **Solution**:
  1. Wait a few minutes before trying again
  2. Check your API plan limits
  3. Consider upgrading your Perplexity plan if needed

### App Won't Load
- **Error**: Environment variables not loading
- **Solution**:
  1. Restart the development server with `npm start -- --clear`
  2. Ensure `.env` file is in the project root
  3. Check that `babel.config.js` includes the dotenv plugin

## 💡 Features

### Chat Interface
- **Real-time messaging**: Instant responses from Perplexity AI
- **Message history**: Keep track of your conversation
- **Timestamps**: See when each message was sent
- **Model indicators**: Know which AI model responded
- **Error handling**: Clear feedback when something goes wrong

### Smart Suggestions
- **Quick start questions**: Pre-written questions to get you started
- **Context-aware**: AI remembers the conversation context
- **Web-enabled**: AI can search the web for current information

### Security
- **Environment variables**: API keys stored securely
- **Local storage**: Chat history stays on your device
- **No data collection**: Your conversations are private

## 📈 Usage Tips

### Getting Better Responses
1. **Be specific**: Ask detailed questions for better answers
2. **Provide context**: Give background information when relevant
3. **Ask follow-ups**: Build on previous responses for deeper insights
4. **Use examples**: Include examples when asking for explanations

### Model Selection
- **Small model**: Use for quick questions and basic queries
- **Large model**: Use for complex analysis and detailed explanations
- **Huge model**: Use for research and comprehensive responses

## 🔗 Useful Links

- [Perplexity AI Documentation](https://docs.perplexity.ai/)
- [API Reference](https://docs.perplexity.ai/reference)
- [Pricing Information](https://www.perplexity.ai/pricing)
- [Support](https://www.perplexity.ai/support)

## 📞 Support

If you encounter any issues:

1. Check this troubleshooting guide
2. Verify your API key and configuration
3. Check the app logs for error details
4. Contact Perplexity support for API-related issues

---

**Happy chatting with AI! 🤖✨**