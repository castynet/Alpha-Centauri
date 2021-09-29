import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
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

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
