import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Sidebar = styled.div`
  width: 20%;
  background-color: lightblue;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 50px;
  position: fixed;
  box-shadow: var(--levelOneDropShadow);
  top: 0;
  left: 0;
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
  margin: 20px 10px;
  list-style: none;
  padding: 20px 10px;
  box-shadow: var(--levelOneDropShadow);
  border-radius: 2em;
  border: 2px solid aliceblue;
  transition: var(--smoothTransition);
  font-weight: 600;

  :hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const BrowseMenu = styled.ul`
  background-color: antiquewhite;
`;

export const BrowseMenuItem = styled.li`
  background-color: lightblue;
  box-shadow: var(--levelOneDropShadow);
  margin: 10px;
  padding: 10px;
  transition: var(--smoothTransition);

  :hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;
