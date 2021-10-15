import styled from "styled-components";
import { Icons } from "../icons.styles";

export const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
  height: ${(props) => (props.openUser ? "320px" : "60px")};
  width: ${(props) => (props.openUser ? "350px" : "60px")};
  border-radius: ${(props) => (props.openUser ? "var(--borderRadius)" : "50%")};
  border: 2px solid lightblue;
  transition: var(--smoothTransition);
  box-shadow: ${(props) =>
    props.openUser ? "var(--levelTwoDropShadow)" : "var(--levelOneDropShadow)"};
  padding: ${(props) => (props.openUser ? "10px" : "none")};
  background-color: ${(props) => (props.openUser ? "white" : "none")};
`;

export const ProfileIcon = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  height: 100%;
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const Expanded = styled.div`
  display: ${(props) => (props.openUser ? "block" : "none")};
`;

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 70px;
  height: 35px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: all 0.5s;
`;

export const SwitchButton = styled.span`
  content: "";
  position: absolute;
  border: 2px solid white;
  left: 2px;
  width: 36px;
  height: 26px;
  border-radius: 45px;
  transition: 0.5s;
  background: grey;

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

export const ThemeSwitch = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 10px;
`;

export const ThemeSwitchLabel = styled.p``;

export const UserIcon = styled(Icons.User)`
  max-width: 70%;
  max-height: 70%;
  margin: 0 auto;
`;

export const UserInnerImg = styled.div`
  height: 150px;
  width: 150px;
  background-color: #000;
  border-radius: 50%;
  margin: 10px auto;
`;

export const Logout = styled.p`
  position: absolute;
  margin: 10px;
  bottom: 0;
  color: blue;
  text-decoration: underline;
  border: 1px solid #aaa;
  padding: 3px 20px;
  border-radius: 1000px;
  transition: var(--smoothTransition);

  &:hover {
    cursor: pointer;
    background-color: lightcoral;
    color: white;
  }
`;

export const ProfileInfo = styled.p`
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: 3px 20px;
`;

export const UserAction = styled.p`
  color: blue;
  text-decoration: underline;
  padding: 5px 25px;
  border-radius: 1000px;
  transition: var(--smoothTransition);
  text-align: center;
  width: fit-content;
  margin: 5px 5px;
  display: inline-block;

  &:hover {
    cursor: pointer;
    background-color: mediumaquamarine;
    color: #000;
  }
`;

export const ActionWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
