import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
import { Slugify } from "./general/utilities";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const Context = React.createContext();

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const provider = new GoogleAuthProvider();
const auth = getAuth(firebaseApp);
const db = getFirestore();

const functions = getFunctions(firebaseApp, "europe-west3");
const initPayment = httpsCallable(functions, "initPayment");

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
  const [courses, setCourses] = useState([]);

  // fetch courses before anything else
  useEffect(() => {
    const getUser = async (uid) => {
      const docSnap = await getDoc(doc(db, "users", uid));
      const usr = docSnap.data();
      setUser(usr);
    };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setToken(user.uid);
        setUserRef(doc(db, "users", user.uid));
        setRawUser(user);
        getUser(user.uid);
      }
    });
    fetchCourses();
  }, []);

  // fetch courses from firebase
  const fetchCourses = async () => {
    const coursesSnapshot = await getDocs(collection(db, "courses"));
    const courses = [];
    coursesSnapshot.forEach((doc) => {
      var cs = Object.assign({}, doc.data());
      cs.slug = Slugify(cs.title);
      courses.push(cs);
    });
    setCourses(courses);
  };

  // get the user data, if user is none existent, create one
  async function fetchUser(paramUser) {
    const docSnap = await getDoc(doc(db, "users", paramUser.uid));
    if (!docSnap.exists()) {
      setView("AccMgmt");
      var content = {
        displayName: paramUser.displayName,
        phoneNumber: paramUser.phoneNumber,
        avatar: paramUser.photoURL,
      };
      AddUserToDb(content, doc(db, "users", paramUser.uid));
    } else {
      const usr = docSnap.data();
      setUser(usr);
    }
  }

  // send user info to db
  function AddUserToDb(content, userRef) {
    setDoc(userRef, content, { merge: true });
    fetchUser(rawUser);
  }

  // sign the user in then send them to complete acc page or courses
  async function signIn() {
    setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    setToken(result.user.uid);
    setUserRef(doc(db, "users", result.user.uid));
    setRawUser(result.user.user);
    fetchUser(result.user);
  }

  async function signOut() {}

  // initiate payment from mpesa
  async function subscribe(plan, phone) {
    var data = {
      email: user.email,
      uid: token,
      phone: phone,
      plan: plan,
    };
    console.log(data);
    initPayment(data).then((result) => {
      console.log(result);
    });
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
        courses,
        signOut,
        subscribe,
        fetchCourses,
      }}
    >
      {children}
    </Context.Provider>
  );
};
