import * as styled from "./styles/courses.styles";

export default function Courses() {
  return (
    <>
      <styled.Wrapper>
        {[...Array(5)].map((e, i) => (
          <styled.Course>
            <p>Course Title</p>
            <p>Course Description</p>
            <p>Course Image</p>
            <p>Progress | Rating</p>
            <p>Continue Learning | Purchase</p>
            <p>Number of enrolled students</p>
          </styled.Course>
        ))}
      </styled.Wrapper>
    </>
  );
}
