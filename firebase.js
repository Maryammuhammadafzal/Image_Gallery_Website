
 // Import the functions 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 import { getAuth , signInWithEmailAndPassword, GoogleAuthProvider , signInWithPopup  } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

 // My web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDDPBakfyxt6QmqsCd8QL4_XB3gTpstskE",
   authDomain: "authentication-f8318.firebaseapp.com",
   projectId: "authentication-f8318",
   storageBucket: "authentication-f8318.firebasestorage.app",
   messagingSenderId: "271081738352",
   appId: "1:271081738352:web:48e16f313e4277c7d724b5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();

 export {auth , signInWithEmailAndPassword , provider ,signInWithPopup};