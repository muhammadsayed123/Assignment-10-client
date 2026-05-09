// import React from 'react';

import { useEffect, useState } from "react";
import { AuthContest } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email ,password)
  }

  useEffect(()=>{
    const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })

    return ()=>{
        unsubscriber()
    }
  },[])


  const authInfo = {
    createUser,
    signInUser,
    user,
    loading
  };

  return <AuthContest value={authInfo}>{children}</AuthContest>;
};

export default AuthProvider;
