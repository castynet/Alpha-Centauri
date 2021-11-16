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

export const AssignmentWrapper = styled.div``;

export const Assignment = styled.div`
  width: 100%;
  margin: 20px 0;
  background-color: white;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 10px;
  height: 150px;

  p {
    margin: 5px 0;
    font-weight: 600;

    span {
      display: inline-block;
      font-weight: normal;
      width: 200px;
      text-decoration: underline;
    }
  }

  div {
    float: right;
    height: 150px;
    background-color: lightgreen;
    margin-top: -10px;
    margin-right: -10px;
    border-top-right-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
