import { useState } from "react";
import * as styled from "./user.styles.js";

export default function DashBoard() {
  const [openUser, setOpenUser] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  const expandUser = () => {
    openUser ? setOpenUser(false) : setOpenUser(true);
  };

  const toggleTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (
    <>
      <styled.Wrapper openUser={openUser}>
        {!openUser ? (
          <styled.ProfileIcon onClick={() => expandUser()}>
            <styled.UserIcon title="View Courses" />
          </styled.ProfileIcon>
        ) : (
          <styled.Expanded openUser={openUser}>
            <styled.UserInnerImg>
              <img src="" alt="User Profile" />
            </styled.UserInnerImg>
            <styled.ProfileInfo>Signed in as Max</styled.ProfileInfo>
            <styled.ActionWrap>
              <styled.UserAction>Edit Profile</styled.UserAction>
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
        )}
      </styled.Wrapper>
    </>
  );
}
