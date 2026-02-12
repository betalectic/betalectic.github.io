---
slug: universal-deeplink
title: "Universal Deeplink (React Native Bare App)"
authors: [Shreekant]
image: /img/blogs/deeplink.jpg
---

# 🌐 Deep Linking & Universal Linking Setup Guide for React Native

This guide provides step-by-step instructions for setting up deep linking on both iOS and Android platforms. It ensures that users can navigate directly to specific screens within your app from external links, such as URLs or shared content.<!--truncate--> This guide ensures deep linking is properly configured for **both iOS and Android**, using:

- 🔗 `apple-app-site-association` (iOS)
- 🔗 `assetlinks.json` (Android)

---

## ✅ Common Hosting Requirements

These requirements apply to **both platforms**:

| Requirement      | Value                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Protocol**     | HTTPS only                                                                                                                |
| **Location**     | `https://your-domain.com/.well-known/`                                                                                    |
| **Content-Type** | `application/json`                                                                                                        |
| **Request type** | Only `GET` requests                                                                                                       |
| **No redirects** | No 301/302 redirects allowed                                                                                              |
| **Access**       | Publicly accessible (no auth headers or cookies)                                                                          |
| **Path**         | Must be **exactly** `/.well-known/apple-app-site-association` and `/.well-known/assetlinks.json` (no extensions for iOS!) |

> 🔁 Replace your-domain.com with your actual hosted domain, e.g., myapp.example.com, xyz.co.in, etc.

### ✅ Test Hosting

Use this in terminal:

```bash

curl -I https://your-domain.com/.well-known/apple-app-site-association
curl -I https://your-domain.com/.well-known/assetlinks.json
```

Expected:

```

HTTP/2 200
Content-Type: application/js
```

---

## 🍏 iOS Setup – Universal Links

### 1. 📁 File: `apple-app-site-association`

**Location**:

```

https://your-domain.com/.well-known/apple-app-site-association
```

**Content**:

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.BUNDLE_ID",
        "paths": ["/deeplink/*"]
      }
    ]
  }
}
```

> 🔁 Replace:
>
> - `TEAM_ID`: Apple Developer Team ID (get it from Apple Dev portal)
> - `BUNDLE_ID`: iOS bundle identifier (e.g., `com.example.myapp`)

### 2. 🛠 Add Entitlements

You must enable associated domains in your iOS app:

### Option A: Xcode GUI (Recommended)

1. Open your iOS project in Xcode.
2. Select your target → Go to **Signing & Capabilities**
3. Click **+ Capability** → add **Associated Domains**
4. Under **Domains**, add:

   ```

   applinks:your-domain.com
   ```

### Option B: Manually edit `.entitlements` file

In `ios/YourApp/YourApp.entitlements`, add:

```xml

<key>com.apple.developer.associated-domains</key>
<array>
  <string>applinks:your-domain.com</string>
</array>
```

Also, make sure this file is included in your target's build settings.

---

## 🤖 Android Setup – App Links

### 1. 📁 File: `assetlinks.json`

**Location**:

```
https://your-domain.com/.well-known/assetlinks.json
```

**Content**:

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.yourcompany.app",
      "sha256_cert_fingerprints": ["AA:BB:CC:...:ZZ"]
    }
  }
]
```

> 🔁 Replace:
>
> - `package_name`: your app’s package name (e.g., `com.example.myapp`)
> - `sha256_cert_fingerprints`: SHA-256 of your release keystore

### 📌 Get SHA-256 Fingerprint:

```bash

keytool -list -v -keystore your-release-key.jks -alias your-alias
```

You’ll find:

```

SHA256: AA:BB:CC:...:ZZ
```

---

### 2. 🧾 AndroidManifest.xml Setup

Update `android/app/src/main/AndroidManifest.xml`:

```xml

<activityandroid:name=".MainActivity"
  android:launchMode="singleTask"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
  android:label="@string/app_name"
  android:windowSoftInputMode="adjustResize">

  <intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <dataandroid:scheme="https"
      android:host="your-domain.com"
      android:pathPrefix="/deeplink" />
  </intent-filter>
</activity>
```

> 🔁 Replace your-domain.com and path as needed.

---

## 🔁 Summary Checklist

| Step | iOS (Universal Links)             | Android (App Links)                |
| ---- | --------------------------------- | ---------------------------------- |
| ✅   | Host `.well-known` file           | Host `.well-known` file            |
| ✅   | Enable Associated Domains         | Add `intent-filter` to manifest    |
| ✅   | Add `.entitlements` with applinks | Add `assetlinks.json` with SHA-256 |
| ✅   | HTTPS, JSON, No Redirects         | HTTPS, JSON, No Redirects          |
| ✅   | Test with `curl -I`               | Test with `curl -I`                |

---

### 🧪 Testing

### iOS Simulator

```bash

xcrun simctl openurl booted https://your-domain.com/deeplink/anything
```

### Android Emulator

```bash

adb shell am start -W -a android.intent.action.VIEW -d "https://your-domain.com/deeplink/anything" bundleId
```

---

### 💡 Optional: Deep Linking Test Links

Try opening:

- iOS: `https://your-domain.com/deeplink/test`
- Android: `https://your-domain.com/deeplink/test`

Or manually test in browser or using `adb`:

```bash

adb shell am start -a android.intent.action.VIEW -d "https://your-domain.com/deeplink/test" com.yourcompany.app
```

## <br/>

---

<br/><br/>

# ✅ UPI Deep Linking Support in React Native App (Android + iOS)

🔁 Common JS Code (React Native)

Ensure you're intercepting UPI schemes like `upi://` in WebView or navigation handlers:

```tsx
import { Linking } from "react-native";

const handleNavigationStateChange = (navState: any) => {
  const url = navState?.url;
  if (url?.startsWith("upi://")) {
    Linking.openURL(url).catch((err) => {
      console.warn("Unable to open UPI link", err);
    });
    return false;
  }
};
```

---

## 🍏 iOS Configuration (`Info.plist`)

Add `LSApplicationQueriesSchemes` to allow launching or checking if UPI apps are installed:

```xml

<key>LSApplicationQueriesSchemes</key>
<array>
    <string>upi</string>
    <string>phonepe</string>
    <string>tez</string>
    <string>paytm</string>
    <string>bhim</string>
    <string>amazonpay</string>
    <string>cred</string>
    <string>freecharge</string>
</array>

```

> ⚠️ This is mandatory for Linking.canOpenURL and Linking.openURL to work for these schemes on iOS.

---

## 🤖 Android Configuration (`AndroidManifest.xml`)

### 1. Add `<queries>` for Android 11+ (API 30+) — Required to check if apps are installed

```xml

<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <queries>
    <!-- UPI base scheme -->
    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="upi" />
    </intent>

    <!-- Specific UPI apps -->
    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="bhim" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="paytm" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="amazonpay" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="cred" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="freecharge" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="phonepe" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>

    <intent>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="tez" />
      <data android:host="pay" />
      <data android:pathPrefix="/" />
    </intent>
  </queries>
```

## 🔍 Testing UPI Deep Links

### Android

```bash

adb shell am start -a android.intent.action.VIEW -d "upi://pay?pa=xyz@upi&pn=Test&am=1&cu=INR"
```

### iOS (Safari or in-app)

```jsx
Linking.openURL("upi://pay?pa=xyz@upi&pn=Test&am=1&cu=INR");
```
