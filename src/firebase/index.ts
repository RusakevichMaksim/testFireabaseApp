import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
export const provider = new GoogleAuthProvider();
export const db = getFirestore(firebase);
export const storage = getStorage();

export const handleGetCollection = async (name: string) => {
  return await getDocs(collection(db, name));
};

export const handleGetDocument = async (name: string, id: string) => {
  return await getDoc(doc(db, name, id));
};

export const handleSetCollection = async (
  colName: string,
  docName: string,
  data: any
) => {
  const todoRef = collection(db, colName);

  return await setDoc(doc(todoRef, docName), data).then((e) => {
    console.log("completed");
  });
};

export const handleOnAuthStateChanged = (callback: any) => {
  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      console.log(user, "logged in !");
      callback(true);
    } else {
      console.log(user, "No user!");
      callback(false);
    }
  });
};

export const handleSignInWithEmailAndPassword = (data: any) => {
  signInWithEmailAndPassword(auth, data.login, data.password);
};

export const handleCreateUserWithEmailAndPassword = (data: any) => {
  createUserWithEmailAndPassword(auth, data.login, data.password);
};

export const handleSignInWithPopup = () => {
  signInWithPopup(auth, provider);
};

export const handleUploadFile = async (file: any) => {
  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let filename = file.name + randomIntFromInterval(1, 99999);

  const storageRef = ref(storage, filename);

  return uploadBytes(storageRef, file)
    .then(() => {
      return getDownloadURL(ref(storage, filename)).then((e) => {
        return e;
      });
    })
    .catch((e) => {
      console.log(e, "not url");
    })
    .catch((e) => {
      console.log(e, "not upload");
    });
};

export const handleDeleteDoc = async (colName: string, docName: string) => {
  return await deleteDoc(doc(db, colName, docName));
};
