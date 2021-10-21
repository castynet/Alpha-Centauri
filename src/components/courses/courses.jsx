import * as styled from "./courses.styles";

export default function Courses() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title> All Courses</styled.Title>
        <styled.CourseWrapper>
          {[...Array(5)].map((e, i) => (
            <styled.Course>
              <styled.CourseImage
                src="https://digikids.co.ke/wp-content/uploads/2019/05/minecraft.png"
                alt="courseImage"
              />
              <styled.CourseTitle>Course Title</styled.CourseTitle>
            </styled.Course>
          ))}
        </styled.CourseWrapper>
      </styled.Wrapper>
    </>
  );
}
