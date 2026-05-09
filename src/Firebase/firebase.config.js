// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPq6gdz92VMH2A0kM36ofBcuER82GuXR4",
  authDomain: "movie-master-a95e1.firebaseapp.com",
  projectId: "movie-master-a95e1",
  storageBucket: "movie-master-a95e1.firebasestorage.app",
  messagingSenderId: "510934735714",
  appId: "1:510934735714:web:6508221440d74afbb8ea3b",
  measurementId: "G-G3CVV746C3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);