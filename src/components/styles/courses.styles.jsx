import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Course = styled.div`
  background-color: white;
  width: 350px;
  height: 200px;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 10px;

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
