import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getFunctions, httpsCallable } from "firebase/functions";
import { Slugify, error } from "./general/utilities";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  signOut,
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
  const [myCourses, setMyCourses] = useState([]);
  const [assignment, setAssignment] = useState([]);
  const [tests, setTests] = useState([]);
  const [payments, setPayments] = useState([]);
  const [popup, setPopup] = useState({});
  const [plan, setPlan] = useState(null);

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
    // raw user comes from state, so we can use it to fetch user data
    fetchUser(rawUser);
  }

  // sign the user in then send them to complete acc page or courses
  async function signIn() {
    setPersistence(auth, browserSessionPersistence);
    const result = await signInWithPopup(auth, provider);
    setToken(result.user.uid);
    setUserRef(doc(db, "users", result.user.uid));
    setRawUser(result.user);
    fetchUser(result.user);
  }

  // logout and reload to lose state
  async function logOut() {
    signOut(auth);
    window.location.reload();
  }

  // initiate payment from mpesa
  async function subscribe(plan, phone) {
    var data = {
      email: user.email,
      uid: token,
      phone: phone,
      plan: plan,
    };
    initPayment(data).then((result) => {
      // if result is positive say we are processing payment
      if (result.data.status === "success") {
        setPopup({
          type: "info",
          message:
            "You can close this window, we'll automatically update your account once we have processed the payment.",
          open: true,
          title: "Processing Payment, Check your Phone",
        });
        setTimeout(getPayments, 20000);
      } else {
        setPopup({ ...error, ...{ title: "Error with Payment" } });
      }
    });
  }

  // get assignments
  async function getAssignments() {}

  // get tests
  async function getTests() {}

  // get payments
  async function getPayments() {
    const paymentsSnapshot = await getDocs(
      collection(db, `users/${token}/payments`)
    );
    const payments = [];
    paymentsSnapshot.forEach((doc) => {
      if (plan === null) {
        setPlan(doc.data().plan);
      } else if (plan.timestamp < doc.data().timestamp) {
        setPlan(doc.data().plan);
      }
      payments.push(doc.data());
    });
    setPayments(payments);
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
        logOut,
        subscribe,
        fetchCourses,
        getAssignments,
        getTests,
        getPayments,
        popup,
        setPopup,
        plan,
        payments,
      }}
    >
      {children}
    </Context.Provider>
  );
};
