import * as styled from "./search.styles";

export default function Search() {
  return (
    <>
      <styled.Wrapper>
        <styled.Input type="text" required />
        <styled.SubInput type="submit" value="Search" />
      </styled.Wrapper>
    </>
  );
}
