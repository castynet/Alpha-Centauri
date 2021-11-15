import * as styled from "./courses.styles";
import { useApp } from "../context";
import Loading from "../general/loading";
import { Link } from "react-router-dom";
import { addCommaToNumber } from "../general/utilities";

export default function Courses() {
  const app = useApp();

  const handleClick = () => {
    app.view === "My Courses"
      ? app.setView("All Courses")
      : app.setView("My Courses");
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
        {app.courses ? (
          <styled.CourseWrapper>
            {app.courses.map((course) => (
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
          <Loading />
        )}
      </styled.Wrapper>
    </>
  );
}
