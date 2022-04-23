// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCn_GmXgX_XynBctKWrL7rr1yzXyq-cRcQ",
  authDomain: "hureechain.firebaseapp.com",
  databaseURL: "https://hureechain-default-rtdb.firebaseio.com",
  projectId: "hureechain",
  storageBucket: "hureechain.appspot.com",
  messagingSenderId: "938538313737",
  appId: "1:938538313737:web:a7ade7cb7bfdcdd48b70d8",
  measurementId: "G-4XVTQV1MB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;
