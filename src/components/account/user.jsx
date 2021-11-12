import { useState } from "react";
import * as styled from "./user.styles.js";
import { useApp } from "../context.jsx";
import { Link } from "react-router-dom";

export default function DashBoard() {
  const app = useApp();
  const [openUser, setOpenUser] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  const expandUser = () => {
    openUser ? setOpenUser(false) : setOpenUser(true);
  };

  const toggleTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (
    <>
      <styled.Overlay
        onClick={() => expandUser()}
        openUser={openUser}
      ></styled.Overlay>
      <styled.Wrapper openUser={openUser}>
        {!openUser ? (
          <styled.ProfileIcon onClick={() => expandUser()}>
            <styled.UserIcon title="View User" />
          </styled.ProfileIcon>
        ) : (
          <>
            <styled.Expanded openUser={openUser}>
              <styled.Close onClick={() => expandUser()} />
              <styled.UserInnerImg>
                <img src={app.user.avatar} alt="User Profile" />
              </styled.UserInnerImg>
              <styled.ProfileInfo>
                Signed in as <u>{app.user.displayName}</u>
              </styled.ProfileInfo>
              <styled.ActionWrap>
                <Link style={style} to={"/"}>
                  <styled.UserAction onClick={() => app.setView("AccMgmt")}>
                    Edit Profile
                  </styled.UserAction>
                </Link>
                <styled.UserAction>Payments</styled.UserAction>
              </styled.ActionWrap>
              <styled.Logout>Logout</styled.Logout>
              <styled.ThemeSwitch>
                <styled.SwitchInput
                  id="switch"
                  type="checkbox"
                  onChange={() => toggleTheme()}
                  checked={darkTheme}
                />
                <styled.SwitchLabel htmlFor="switch">
                  <styled.SwitchButton />
                </styled.SwitchLabel>
                <styled.ThemeSwitchLabel>
                  {darkTheme ? "Light" : "Dark"} Theme
                </styled.ThemeSwitchLabel>
              </styled.ThemeSwitch>
            </styled.Expanded>
          </>
        )}
      </styled.Wrapper>
    </>
  );
}
