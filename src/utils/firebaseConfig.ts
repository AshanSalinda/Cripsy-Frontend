// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAo5XPOHGcGN7dqX3DtYMCY2hDTd6tPSHs",
    authDomain: "jobquest-b71b5.firebaseapp.com",
    projectId: "jobquest-b71b5",
    storageBucket: "jobquest-b71b5.appspot.com",
    messagingSenderId: "143846632073",
    appId: "1:143846632073:web:989e595cd30fe8bae8f458",
    measurementId: "G-E4ZNEKYD0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };