// import React from 'react';

import { useEffect, useState } from "react";
import { AuthContest } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscriber();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    signInWithGoogle,
    logOut,
    user,
    loading,
  };

  return <AuthContest value={authInfo}>{children}</AuthContest>;
};

export default AuthProvider;
