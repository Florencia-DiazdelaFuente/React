import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB57tnbhMDtzErrZjLh2-eb1u30Wqf994I",
  authDomain: "the-bike-store-16f37.firebaseapp.com",
  projectId: "the-bike-store-16f37",
  storageBucket: "the-bike-store-16f37.appspot.com",
  messagingSenderId: "894071999957",
  appId: "1:894071999957:web:144827f702f11eb37ec15c"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



