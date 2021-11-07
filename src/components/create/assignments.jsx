import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { doc, setDoc, getFirestore, Timestamp } from "firebase/firestore";

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const db = getFirestore(firebaseApp);

const content = {
  title: "Introduction To React",
  topic: "Introduction",
  done: false,
  grade: null,
  estDuration: 300,
  response: null,
  dueDate: Timestamp.fromDate(new Date("October 11, 2021")),
  questions: "Write a simple calculator app using react",
};

export default function AddAssignments() {
  async function addAssignment() {
    await setDoc(doc(db, "assignments", content.title), content, {
      merge: true,
    });
  }

  return (
    <>
      <button onClick={() => addAssignment()}>save info</button>
    </>
  );
}
