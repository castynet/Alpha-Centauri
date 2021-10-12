import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
`;

export const Avatar = styled.img`
  height: 300px;
  width: 100%;
`;

export const DeleteBtn = styled.button`
  background-color: #740000;
  color: #fff;
  border: none;
  border-radius: var(--borderRadius);
  outline: none;
  padding: 8px 25px;
  margin: 10px;
  transition: var(--smoothTransition);

  &:hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;
