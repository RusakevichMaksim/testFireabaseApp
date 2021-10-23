import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const firebase = initializeApp(firebaseConfig);

export const auth = getAuth(firebase);
// const db = getFirestore(app);
// const todosCol = collection(db, "todos");
// const snapshot = getDocs(todosCol);

export const handleOnAuthStateChanged = () => {
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log(user, "logged in !");
    } else {
      console.log(user, "No user!");
    }
  });
};

export const handleCreateUserWithEmailAndPassword = (data: any) => {
  createUserWithEmailAndPassword(auth, data.login, data.password)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
