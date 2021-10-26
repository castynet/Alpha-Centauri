import * as styled from "./singleTest.styles";

export default function SingleTest() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title>Tests</styled.Title>
        <styled.TestWrapper>
          {[...Array(5)].map((e, i) => (
            <styled.Test>
              Test Title
              <br /> Due Date
              <br /> Done?
              <br /> Grade?
              <br /> Course
              <br /> Est Duration
              <br /> View
            </styled.Test>
          ))}
        </styled.TestWrapper>
      </styled.Wrapper>
    </>
  );
}
