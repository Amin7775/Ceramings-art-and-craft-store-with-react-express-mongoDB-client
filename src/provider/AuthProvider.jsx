import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,  signInWithPopup,  signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider,GithubAuthProvider  } from "firebase/auth";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const Googleprovider = new GoogleAuthProvider();
const GithubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    // create user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update current user after register
  const updateUserAfterRegister = (name, photoURL) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // sign in with email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const googleSignin = () =>{
    setLoading(true)
    return signInWithPopup(auth, Googleprovider)
  }
  // sign in with google
  const githubLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, GithubProvider)
  }
  

  // User State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

    const authInfo = {
        createUser,
        updateUserAfterRegister,
        loginUser,
        googleSignin,
        githubLogin,
        logOut,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;