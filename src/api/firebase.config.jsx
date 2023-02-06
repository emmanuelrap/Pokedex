import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtK02Z8pvJoYYUYTz3s5npOOblf86Ay2E",
  authDomain: "pokedex-pwa-afab1.firebaseapp.com",
  projectId: "pokedex-pwa-afab1",
  storageBucket: "pokedex-pwa-afab1.appspot.com",
  messagingSenderId: "134606524505",
  appId: "1:134606524505:web:462f7526b4abcf9c7ca148",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
