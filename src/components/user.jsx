import { useState } from "react";
import * as styled from "./styles/user.styles.js";

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
      <styled.Wrapper>
        <styled.ProfileIcon openUser={openUser} onClick={() => expandUser()}>
          <styled.Expanded openUser={openUser}>
            <img src="" alt="User Profile" />
            <p>my account</p>
            <p>logout</p>
            <p>edit profile</p>
            <p>settings</p>
            <styled.SwitchInput
              className="switch-checkbox"
              id="switch"
              type="checkbox"
              onChange={() => toggleTheme()}
              checked={darkTheme}
            />
            <styled.SwitchLabel className="switch-label" htmlFor="switch">
              <styled.SwitchButton className="switch-button" />
            </styled.SwitchLabel>
            <p>payments</p>
          </styled.Expanded>
        </styled.ProfileIcon>
      </styled.Wrapper>
    </>
  );
}
