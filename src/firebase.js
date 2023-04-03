// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ9T5B3uttuxRJT8lzBMKRtGEqH5Jiga4",
  authDomain: "blog-website-react-d6d56.firebaseapp.com",
  projectId: "blog-website-react-d6d56",
  storageBucket: "blog-website-react-d6d56.appspot.com",
  messagingSenderId: "471085683254",
  appId: "1:471085683254:web:17c6138368a20a95957e97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
