import * as styled from "./styles/courses.styles";

export default function Courses() {
  return (
    <>
      <styled.Wrapper>
        {[...Array(5)].map((e, i) => (
          <styled.Course></styled.Course>
        ))}
      </styled.Wrapper>
    </>
  );
}
