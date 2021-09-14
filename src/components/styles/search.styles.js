import styled from "styled-components";

export const Wrapper = styled.form`
  width: 80%;
  margin: 20px;
`;

export const Input = styled.input`
  outline: none;
  width: 79%;
  padding: 15px;
  margin: 0 1% 0 0;
  box-shadow: var(--levelOneDropShadow);
  border: none;
  border-radius: 2em;
  transition: var(--smoothTransition);

  :focus {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const SubInput = styled.input`
  width: 20%;
  padding: 15px;
  box-shadow: var(--levelOneDropShadow);
  border: none;
  border-radius: 2em;
  transition: var(--smoothTransition);

  :hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;
