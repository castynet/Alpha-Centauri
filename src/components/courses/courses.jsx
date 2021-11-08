import * as styled from "./courses.styles";
import { useApp } from "../context";

export default function Courses() {
  const app = useApp();

  const addCommaToNumber = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

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
        <styled.CourseWrapper>
          {app.courses.map((course) => (
            <styled.Course key={course.title}>
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
          ))}
        </styled.CourseWrapper>
      </styled.Wrapper>
    </>
  );
}
