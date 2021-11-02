import React, { useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./firebase";

const Context = React.createContext();

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);

export function useApp() {
  return useContext(Context);
}

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [signedIn, setSignedIn] = useState(false);
  const [view, setView] = useState("Courses");
  const [theme, setTheme] = useState("light");

  async function signIn() {
    const result = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    setToken(credential.accessToken);
    setUser(result.user);
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
      }}
    >
      {children}
    </Context.Provider>
  );
};
