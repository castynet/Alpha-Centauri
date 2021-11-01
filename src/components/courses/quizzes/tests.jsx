import * as styled from "./tests.styles";

export default function Tests() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title>Tests</styled.Title>
        <styled.TestWrapper>
          {[...Array(10)].map((e, i) => (
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
