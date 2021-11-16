import * as styled from "./courses.styles";
import { useApp } from "../context";
import Loading from "../general/loading";
import { Link } from "react-router-dom";
import { addCommaToNumber } from "../general/utilities";
import { useEffect, useState } from "react";

export default function Courses() {
  const app = useApp();
  const [courses, setCourses] = useState([]);

  const handleClick = () => {
    app.view === "My Courses"
      ? app.setView("All Courses")
      : app.setView("My Courses");
  };

  useEffect(() => {
    if (app.myCourses.length === 0) {
      app.fetchMyCourses();
    }
    if (app.view === "All Courses") {
      setCourses(app.courses);
    } else if (app.view === "My Courses") {
      setCourses(app.myCourses);
    }
  }, [app]);

  const Ldng = (param) => {
    return param.loaded > 3000 ? (
      <p>You don't own any Courses</p>
    ) : (
      <>
        <Loading />
      </>
    );
  };

  return (
    <>
      <styled.Wrapper>
        <styled.Title>
          <h2>{app.view === "All Courses" ? "All Courses" : "My Courses"}</h2>
          <styled.AltB view={app.view} onClick={() => handleClick()}>
            {app.view === "All Courses" ? "My Courses" : "All Courses"}
          </styled.AltB>
        </styled.Title>
        {courses ? (
          <styled.CourseWrapper>
            {courses.map((course) => (
              <Link
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                to={`/courses/${course.slug}`}
                key={course.slug}
              >
                <styled.Course>
                  <styled.ImageCrop>
                    <styled.CourseImage
                      src={course.displayImg}
                      alt={`Course Image - ${course.title}`}
                    />
                  </styled.ImageCrop>
                  <styled.CourseTitle>{course.title}</styled.CourseTitle>
                  <styled.CourseInfo>
                    <styled.CourseLang>{course.lang}</styled.CourseLang>
                    <styled.Cost>
                      Cost: KES {addCommaToNumber(course.cost)}
                    </styled.Cost>
                  </styled.CourseInfo>
                </styled.Course>
              </Link>
            ))}
          </styled.CourseWrapper>
        ) : (
          <Ldng
            loaded={setTimeout(() => {
              return true;
            }, 3000)}
          />
        )}
      </styled.Wrapper>
    </>
  );
}
