// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9IHn_QtF0Y34GXlljvMdlLdbEVEO1XW4",
  authDomain: "dragon-news-fc225.firebaseapp.com",
  projectId: "dragon-news-fc225",
  storageBucket: "dragon-news-fc225.firebasestorage.app",
  messagingSenderId: "1087613195523",
  appId: "1:1087613195523:web:8bdab831c438a78f394536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;