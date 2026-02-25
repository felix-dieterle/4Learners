# 4Learners

Universal adaptive learning app — gets deeper and deeper based on the user's interests, powered by [OpenRouter AI](https://openrouter.ai).

Interests are evaluated by:
- **Skipped sentences** (negative signal)
- **"Tell me more" clicks** after a sentence (strong positive signal)
- **Fast + correct quiz answers** (≤ 5 s response time — strong positive signal)

After each learning + quiz cycle the app picks the highest-interest topics and asks the AI for deeper content on exactly those topics.

---

## Architecture

| Module | Purpose |
|---|---|
| `src/interest-tracker.js` | Scores topics from learning & quiz signals |
| `src/learning-session.js` | Manages sentence-by-sentence learning |
| `src/quiz-session.js` | Manages quiz questions with timing |
| `src/adaptive-session.js` | Orchestrates learning → quiz → deeper loop |
| `src/ai-client.js` | OpenRouter REST client (server-side) |
| `public/engine.js` | Browser-compatible bundle of all session logic |
| `public/app.js` | SPA frontend — calls OpenRouter directly, no server needed |
| `server.js` | Optional Express dev server |

---

## Running locally (browser / development)

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (optional, only for local testing)
OPENROUTER_API_KEY=sk-or-... npm start
# → open http://localhost:3000
```

The app also works by opening `public/index.html` directly in a browser (file://) — the API key is stored in `localStorage`.

---

## Building the Android APK

### Prerequisites

| Tool | Version |
|---|---|
| Node.js | ≥ 18 |
| Java JDK | 17 or 21 |
| Android SDK | API 34+ (install via Android Studio or `sdkmanager`) |
| `ANDROID_HOME` env var | pointing to your SDK root |

### Steps

```bash
# 1. Install JS dependencies (if not done yet)
npm install

# 2. Add the Android platform (first time only)
npm run android:init

# 3. Sync web assets into the Android project
npm run android:sync

# 4a. Open in Android Studio and build/sign from there (recommended)
npm run android:open

# 4b. OR build a debug APK from the command line
npm run android:build
# → APK is at: android/app/build/outputs/apk/debug/app-debug.apk
```

### Installing the debug APK on a device

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

### Release / signed APK

1. Generate a keystore: `keytool -genkey -v -keystore 4learners.keystore -alias 4learners -keyalg RSA -keysize 2048 -validity 10000`
2. Configure signing in `android/app/build.gradle`
3. Build: `cd android && ./gradlew assembleRelease`

---

## API key

The app calls [OpenRouter](https://openrouter.ai) directly from the device.
On first launch, tap the **⚙ Settings** button (top-right) and enter your OpenRouter API key.
The key is stored in device `localStorage` (WebView) and never leaves the device.

---

## Running tests

```bash
npm test
```

29 unit tests covering `InterestTracker`, `LearningSession`, `QuizSession`, and `AdaptiveSession`.

