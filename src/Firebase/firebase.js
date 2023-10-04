// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFPVuAVCkKTrF7vfszdz3tDlTCAnKmL28",
  authDomain: "auth-moha-milon-2f34f.firebaseapp.com",
  projectId: "auth-moha-milon-2f34f",
  storageBucket: "auth-moha-milon-2f34f.appspot.com",
  messagingSenderId: "406449480756",
  appId: "1:406449480756:web:57bcc818225ec110ab5661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;