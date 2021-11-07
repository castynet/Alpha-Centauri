import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const Context = React.createContext();

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
const db = getFirestore();

// The app access point
export function useApp() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [view, setView] = useState("Courses");
  const [theme, setTheme] = useState("light");
  const [userRef, setUserRef] = useState(null);
  const [rawUser, setRawUser] = useState(null);

  // send user info to db
  function AddUserToDb(content, userRef) {
    setDoc(userRef, content, { merge: true });
  }

  // sign the user in then send them to complete acc page or courses
  async function signIn() {
    const result = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    setToken(credential.accessToken);
    setUserRef(doc(db, "users", result.user.uid));
    setRawUser(result.user);
    const docSnap = await getDoc(doc(db, "users", result.user.uid));
    if (!docSnap.exists()) {
      setView("AccMgmt");
      var content = {
        displayName: result.user.displayName,
        phoneNumber: result.user.phoneNumber,
        avatar: result.user.photoURL,
      };
      AddUserToDb(content, doc(db, "users", result.user.uid));
    } else {
      setUser(docSnap.data());
    }
  }

  return (
    <Context.Provider
      value={{
        view,
        setView,
        theme,
        setTheme,
        signedIn,
        setSignedIn,
        user,
        token,
        signIn,
        AddUserToDb,
        userRef,
        rawUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
