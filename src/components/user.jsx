import { useState } from "react";
import * as styled from "./styles/user.styles.js";

export default function DashBoard() {
  const [openUser, setOpenUser] = useState(false);

  const expandUser = () => {
    openUser ? setOpenUser(false) : setOpenUser(true);
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
            <p>dark theme toggle</p>
            <p>payments</p>
          </styled.Expanded>
        </styled.ProfileIcon>
      </styled.Wrapper>
    </>
  );
}
