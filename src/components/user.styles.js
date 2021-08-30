import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  right: 40px;
  top: 20px;
`;

export const ProfileIcon = styled.div`
  height: ${(props) => (props.openUser ? "350px" : "60px")};
  width: ${(props) => (props.openUser ? "350px" : "60px")};
  border-radius: ${(props) => (props.openUser ? "var(--borderRadius)" : "50%")};
  border: 2px solid lightblue;
  transition: var(--smoothTransition);
  box-shadow: var(--levelOneDropShadow);

  :hover {
    cursor: pointer;
  }
`;
