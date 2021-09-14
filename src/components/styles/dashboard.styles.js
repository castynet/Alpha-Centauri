import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Sidebar = styled.div`
  width: 20%;
  background-color: lightblue;
  height: 100vh;
`;

export const Main = styled.div`
  width: 80%;
  background-color: lightcoral;
  min-height: 100vh;
`;

export const Menu = styled.ul`
  width: 100%;
`;

export const MenuItem = styled.li`
  margin: 10px;
  list-style: none;
  padding: 10px;
  box-shadow: var(--levelOneDropShadow);
  border-radius: 2em;
  border: 2px solid aliceblue;

  :hover {
    transition: var(--smoothTransition);
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const BrowseMenu = styled.ul`
  background-color: antiquewhite;
`;

export const BrowseMenuItem = styled.li`

`;

