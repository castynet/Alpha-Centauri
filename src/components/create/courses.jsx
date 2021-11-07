import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase";
import { doc, getDocs } from "firebase/firestore";
import { collection, setDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";

// initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Auth
const db = getFirestore(firebaseApp);

const topic = {
  transcript: null,
  videoLink: "https://youtu.be/Ke90Tje7VS0",
  title: "Introduction to React",
  topic: "Introduction",
  duration: 180,
  description: "This is a description of the topic",
  position: 1,
};

const courses = [
  {
    displayImg: "https://bit.ly/3ENUTKY",
    title: "Web development with React",
    lang: "JavaScript",
    registeredStd: 10,
    cost: 12000,
  },
  {
    displayImg: "https://bit.ly/3ENUTKY",
    title: "Creative Computing with Scratch",
    lang: "Scratch",
    registeredStd: 15,
    cost: 10000,
  },
  {
    displayImg: "https://bit.ly/3ENUTKY",
    title: "Android development with Java",
    lang: "Java",
    registeredStd: 30,
    cost: 12000,
  },
  {
    displayImg: "https://bit.ly/3ENUTKY",
    title: "Game Development with Python",
    lang: "Python",
    registeredStd: 6,
    cost: 12000,
  },
  {
    displayImg: "https://bit.ly/3ENUTKY",
    title: "MIT app Inventor Module I",
    lang: "Block",
    registeredStd: 54,
    cost: 10000,
  },
];

export default function AddCourses() {
  const [test, setTest] = useState();
  const [assignment, setAssignment] = useState();

  async function addCourse() {
    for (const course of courses) {
      await setDoc(doc(db, "courses", course.title), course, {
        merge: true,
      });
      await setDoc(
        doc(db, `courses/${course.title}/assignments`, assignment.title),
        assignment,
        {
          merge: true,
        }
      );
      await setDoc(doc(db, `courses/${course.title}/tests`, test.title), test, {
        merge: true,
      });
      await setDoc(
        doc(db, `courses/${course.title}/topics`, topic.title),
        topic,
        {
          merge: true,
        }
      );
    }
  }

  async function getInfo() {
    const assignmentSnapshot = await getDocs(collection(db, "assignments"));
    const assignment = assignmentSnapshot.docs[0].data();
    const testSnapshot = await getDocs(collection(db, "tests"));
    const test = testSnapshot.docs[0].data();
    setAssignment(assignment);
    setTest(test);
    console.log(test, assignment);
  }

  return (
    <>
      <br />
      <button onClick={() => getInfo()}>get info</button>
      <br />
      <br />
      <button onClick={() => addCourse()}>save info</button>
    </>
  );
}
