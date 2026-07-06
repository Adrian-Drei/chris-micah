// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAppCheck,
  ReCaptchaV3Provider,
  type AppCheck,
} from "firebase/app-check";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // see .env file for instructions
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "env-not-set",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "env-not-set",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "env-not-set",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "env-not-set",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "env-not-set",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "env-not-set",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "env-not-set",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "env-not-set",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize AppCheck
const appCheck: AppCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(
    import.meta.env.VITE_FIREBASE_RECAPTCHA_SECRET_KEY || "api-key-not-set"
  ),
  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, appCheck, db };
