import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXUmZH5zuBTreBz3yKb8AHN_BS8Xk7Mac",
  authDomain: "login-513f9.firebaseapp.com",
  projectId: "login-513f9",
  storageBucket: "login-513f9.appspot.com",
  messagingSenderId: "1028919788981",
  appId: "1:1028919788981:web:52441fbe308a17072b05fc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

