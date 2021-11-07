import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { doc, setDoc, getFirestore, Timestamp } from "firebase/firestore";

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const db = getFirestore(firebaseApp);

const content = {
  title: "Introduction To Javascript",
  topic: "Introduction",
  done: false,
  grade: null,
  estDuration: 20,
  response: null,
  dueDate: Timestamp.fromDate(new Date("December 11, 2018")),
  questions: [
    "What is JSX?",
    "What is the useState hook used for?",
    "What is the useEffect hook used for?",
    "What is the useContext hook used for?",
    "What is the useReducer hook used for?",
  ],
};

export default function AddTests() {
  async function addTest() {
    await setDoc(doc(db, "tests", content.title), content, {
      merge: true,
    });
  }

  return (
    <>
      <button onClick={() => addTest()}>save info</button>
    </>
  );
}
