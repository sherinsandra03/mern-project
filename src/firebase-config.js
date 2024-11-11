import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA_MhgPeBwiLvqvZqR8yMiX_13Y5gUS9tQ",
    authDomain: "food-website-12df8.firebaseapp.com",
    projectId: "food-website-12df8",
    storageBucket: "food-website-12df8.appspot.com",
    messagingSenderId: "472000614706",
    appId: "1:472000614706:web:0c7922f81416da32a8072b",
    measurementId: "G-T9TVYV73S5"
  };

export const app = initializeApp(firebaseConfig);