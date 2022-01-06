import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyD9Vz6mlFI0-8NYAhvwJyvEVu_I_UpPB0o",
    authDomain: "test-technique-a5ac7.firebaseapp.com",
    databaseURL: "https://test-technique-a5ac7.firebaseio.com",
    projectId: "test-technique-a5ac7",
    storageBucket: "test-technique-a5ac7.appspot.com",
    messagingSenderId: "675219586721",
    appId: "1:675219586721:web:01d9b8ca7380847563fae0"
  };
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
export default database;