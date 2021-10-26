import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const Title = styled.h2`
  background-color: white;
  margin: 0 0 10px 0;
  padding: 10px 10px 10px 40px;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  font-size: 1.3em;
  text-decoration: underline;
`;

export const TestWrapper = styled.div``;

export const Test = styled.div`
  width: 100%;
  margin: 20px 0;
  background-color: white;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 10px;

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
