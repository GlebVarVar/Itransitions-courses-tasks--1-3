import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
 getAuth,
 signInWithEmailAndPassword,
 signOut,
 createUserWithEmailAndPassword
} from "firebase/auth";

import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkQcVhlydWtlMOqF0JTN2FDDNBbD2XizI",
  authDomain: "first-project-1c025.firebaseapp.com",
  databaseURL: "https://first-project-1c025-default-rtdb.firebaseio.com",
  projectId: "first-project-1c025",
  storageBucket: "first-project-1c025.appspot.com",
  messagingSenderId: "783209274400",
  appId: "1:783209274400:web:3e4d29500fc5f5b3923045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) 
const db = getFirestore(app);


// log-in function
const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password + "12345");
    } catch (err) {
      console.error(err);
      alert("user not found... TRY AGAIN!");
    }
};

// registration function
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password + "12345");
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert("user already exist... TRY AGAIN!");
  }
};

// logout function
const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  logout,
  registerWithEmailAndPassword
};