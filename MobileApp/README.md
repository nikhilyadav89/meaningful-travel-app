# MyAwesome App 📱

A beautiful and modern mobile app built with React Native and Expo, featuring a clean UI, navigation, and essential mobile app functionality.

## ✨ Features

- **Beautiful UI Design**: Modern, clean interface with thoughtful UX
- **AI-Powered Chat**: Integrated Google Gemini AI for intelligent conversations
- **Navigation**: Smooth navigation between multiple screens
- **Profile Management**: User profile with editable information
- **Settings**: Comprehensive settings with toggles and preferences
- **Interactive Components**: Buttons, switches, alerts, and more
- **Cross-Platform**: Works on iOS, Android, and Web

## 🏗️ Tech Stack

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and tools
- **React Navigation**: Navigation library
- **Google Gemini AI**: Advanced AI integration for chat functionality
- **Axios**: HTTP client for API requests
- **React Native Safe Area Context**: Safe area handling
- **React Native Screens**: Native screen optimization

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (optional, but recommended)

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd MobileApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Gemini API (Required for AI Chat):**
   - Get your API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Open the `.env` file in the project root
   - Replace `your_gemini_api_key_here` with your actual API key
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

### Running the App

After starting the development server, you have several options:

#### Option 1: Expo Go App (Recommended for beginners)
1. Install the Expo Go app on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
2. Scan the QR code displayed in your terminal or browser

#### Option 2: iOS Simulator (macOS only)
```bash
npm run ios
```

#### Option 3: Android Emulator
```bash
npm run android
```

#### Option 4: Web Browser
```bash
npm run web
```

## 📱 App Structure

```
MobileApp/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js      # Main dashboard with stats and navigation
│   │   ├── ProfileScreen.js   # User profile management
│   │   ├── SettingsScreen.js  # App settings and preferences
│   │   └── AIChatScreen.js    # AI-powered chat interface
│   ├── services/
│   │   └── geminiService.js # Google Gemini API integration
│   └── components/            # Reusable components (future expansion)
├── assets/                    # Images, icons, and static assets
├── .env                       # Environment variables (API keys)
├── App.js                     # Main app component with navigation
├── app.json                   # Expo configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Screenshots & Features

### Home Screen
- Welcome message and user statistics
- Quick action cards for navigation
- Recent activity feed
- Beautiful card-based layout

### Profile Screen
- User avatar and basic information
- Editable profile fields (name, email, phone, bio, location)
- Quick action buttons for common tasks
- Clean form interface with save/cancel functionality

### Settings Screen
- Organized settings sections (General, Privacy, Data, Account, Support)
- Toggle switches for preferences
- Navigation to other screens
- Logout and account management options

### AI Chat Screen
- Real-time chat interface with Google Gemini AI
- Support for different AI models (Flash, Flash 8B, Pro)
- Conversation context awareness
- Suggested questions for quick start
- Message history with timestamps
- Error handling and loading states
- Modern chat bubble design

## 🛠️ Development

### Adding New Screens

1. Create a new screen file in `src/screens/`
2. Add the screen to the navigation stack in `App.js`
3. Import and configure the screen component

### Customizing Styles

The app uses a consistent color scheme and styling:
- Primary color: `#6366f1` (Indigo)
- Success color: `#10b981` (Emerald)
- Background: `#f8fafc` (Slate-50)
- Text: `#1e293b` (Slate-800)

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## 📦 Dependencies

### Core Dependencies
- `expo` - Expo SDK and tools
- `react` - React library
- `react-native` - React Native framework
- `@react-navigation/native` - Navigation core
- `@react-navigation/native-stack` - Stack navigator
- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Native screen optimization
- `@google/generative-ai` - Official Google Gemini AI SDK
- `react-native-dotenv` - Environment variable management

## 🚢 Building for Production

### Android APK
```bash
expo build:android
```

### iOS IPA (requires Apple Developer account)
```bash
expo build:ios
```

### Web Build
```bash
expo build:web
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Expo Documentation](https://docs.expo.dev/)
2. Review [React Navigation docs](https://reactnavigation.org/)
3. Search existing issues or create a new one

## 🎉 Next Steps

Consider adding these features to enhance your app:

- [ ] User authentication (login/signup)
- [ ] Data persistence (AsyncStorage or database)
- [ ] Push notifications
- [ ] API integration
- [ ] Camera functionality
- [ ] Maps integration
- [ ] Social media sharing
- [ ] Offline support
- [ ] Animations and gestures
- [ ] Unit tests

Happy coding! 🚀