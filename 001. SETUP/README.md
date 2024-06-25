# SETUP

<div align="center">
<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--ibA5PR7j--/c_imagga_scale,f_auto,fl_progressive,h_900,q_66,w_1600/https://thepracticaldev.s3.amazonaws.com/i/xu9m9wwkxra0wtxlr48k.gif" />
</div>

## 🔥 INSTALLATION 

### ⚡ Step 1: Create a Firebase Project

1. Go to the Firebase Console.

2. Click on **"Add project"** and follow the setup instructions.

3. Once your project is created, navigate to the project settings by clicking on the gear icon next to **"Project Overview."**

4. In the **"Your apps"** section, click on the **</>** icon to add a web app to your Firebase project. Follow the instructions to register your app.

### ⚡ Step 2: Install Firebase SDK

```cmd
npm install firebase
```

### ⚡ Step 3: Initialize Firebase in Your React App

```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "*****",
  authDomain: "*****",
  projectId: "*****",,
  storageBucket: "*****",,
  messagingSenderId: "*****",,
  appId: "*****",
  measurementId: "*****",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

---