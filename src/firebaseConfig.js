import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1HqxRRIC3z52QGxR9HC70zxZCQhTRQJo",
  authDomain: "ef-hernandeznicolasreact.firebaseapp.com",
  projectId: "ef-hernandeznicolasreact",
  storageBucket: "ef-hernandeznicolasreact.appspot.com",
  messagingSenderId: "815201003176",
  appId: "1:815201003176:web:00c947137be81f566b049d",
};

// const firebaseConfig = {
//     apikey: process.env.REACT_APP_API_KEY,
//     authdomain: process.env.AUTH_DOMAIN,
//     projectId: process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId: process.env.MESSAGIN_SENDER_ID,
//     appId: process.env.APP_ID
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
