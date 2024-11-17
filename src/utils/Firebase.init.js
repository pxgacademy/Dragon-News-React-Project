import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAth-sK4h7KHmVyjDbbFH1QeE88f9DgU_k",
  authDomain: "dragon-news-22ae3.firebaseapp.com",
  projectId: "dragon-news-22ae3",
  storageBucket: "dragon-news-22ae3.firebasestorage.app",
  messagingSenderId: "117138737918",
  appId: "1:117138737918:web:dc9fd80aba2c9e4e2ff3af",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
