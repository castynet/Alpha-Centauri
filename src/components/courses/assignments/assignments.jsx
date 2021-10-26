import * as styled from "./assignments.styles";

export default function Assignments() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title>Assignments</styled.Title>
        <styled.AssignmentWrapper>
          {[...Array(5)].map((e, i) => (
            <styled.Assignment>
              Assignment Title
              <br /> Due Date
              <br /> Done?
              <br /> Grade?
              <br /> Course
              <br /> Est Duration
              <br /> View
            </styled.Assignment>
          ))}
        </styled.AssignmentWrapper>
      </styled.Wrapper>
    </>
  );
}
