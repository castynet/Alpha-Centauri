import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const TestWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Test = styled.div`
  background-color: white;
  width: 340px;
  height: fit-content;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 20px;

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }

  p {
    margin: 5px 0;
    font-weight: 600;

    span {
      display: inline-block;
      font-weight: normal;
      width: 130px;
      text-decoration: underline;
    }
  }

  div {
    width: 340px;
    background-color: lightgreen;
    margin-top: 10px;
    margin-bottom: -20px;
    margin-left: -20px;
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
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
