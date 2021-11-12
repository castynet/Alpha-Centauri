import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
`;

export const SectionTitle = styled.h2`
  border-bottom: solid 1px #aaa;
  padding: 5px 0;
  margin: 20px 0 10px;
  text-align: center;
  text-transform: capitalize;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Info = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const PlanWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px auto;
  max-width: 620px;
`;

export const Plan = styled.div`
  width: 300px;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
  background-color: lightgreen;
  padding: 20px;

  &:first-of-type {
    background-color: lightskyblue;
  }
`;

export const Duration = styled.p`
  border-radius: 4px;
  color: navy;
  border: 1px solid navy;
  padding: 2px 8px;
  font-size: 0.8em;
  width: fit-content;
`;

export const PlanTitle = styled.h3`
  margin: 5px;
`;

export const Amount = styled.p`
  background-color: #ffffff20;
  border-top: #00000055 solid 1px;
  border-bottom: #00000055 solid 1px;
  padding: 2px 30px;
`;

export const SubscribeButton = styled.button`
  border-radius: 1000px;
  margin-top: 20px;
  padding: 10px 35px;
  border: none;
  cursor: pointer;
  box-shadow: var(--levelOneDropShadow);
  width: 100%;
  transition: var(--smoothTransition);

  &:hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const InputWrapper = styled.div`
  border-top: #00000055 solid 1px;
  border-bottom: #00000055 solid 1px;
  padding: 10px 50px;
  margin: 30px auto 0;
  width: fit-content;
  display: flex;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  transition: var(--smoothTransition);
  margin: 0 0 0 30px;
  border-bottom: 1px solid #fff;
  width: 200px;

  &:focus {
    border-bottom: 1px solid #aaa;
  }
`;

export const InputLabel = styled.label`
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  display: block;
  border-radius: 1000px;
  margin: 30px auto 20px;
  padding: 10px 35px;
  border: none;
  cursor: pointer;
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
  background-color: green;
  color: white;

  &:hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
