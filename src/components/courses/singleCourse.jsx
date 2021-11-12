import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApp } from "../context";
import Loading from "../general/loading";
import * as styled from "./singleCourse.styles";

export default function SingleCourse() {
  const app = useApp();
  const params = useParams();
  const [course, setCourse] = useState(null);

  const selectedCourse = app.courses.find(
    (course) => course.slug === params.slug
  );

  useEffect(() => {
    setCourse(selectedCourse);
  }, [selectedCourse]);

  // if course can be found in user courses then show that course
  // otherwise show the get course btn
  // otherwise show subscribe btn
  // otherwise show loading

  return (
    <>
      {course ? (
        <>
          <styled.Wrapper>
            Course Title
            <p>a - Purchased course || b - Non-Purchased Course</p>
            <p>Course name</p>
            <p>Tutor</p>
            <p>Progress</p>
            <p>Cost</p>
            <p>community posts about the course</p>
            course.description
            <p> -aa- add review</p>
            <p> -aa- continue learning</p>
            <p> -aa- progress</p>
            <p> -aa- material</p>
            <p> -aa- assignments</p>
            <p> -aa- tests</p>
            <p> -bb- purchase course</p>
            <p> -bb- cost</p>
            <p> -bb- related courses</p>
            <p>reviews </p>
          </styled.Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
