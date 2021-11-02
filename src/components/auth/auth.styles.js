import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  gap: 20px;
  background-color: lightblue;
`;

export const Button = styled.button`
  display: block;
  padding: 15px;
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
  border: none;
  border-radius: 1000px;

  :hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  flex-direction: column;
  gap: 10px;
  background-color: lightcoral;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
`;

export const Title = styled.h2`
  background-color: lightcoral;
  box-shadow: var(--levelOneDropShadow);
  width: 400px;
  text-align: center;
  padding: 10px;
  border-radius: var(--borderRadius);
`;

export const BtnText = styled.span`
  display: inline-block;
  width: 290px;
`;
