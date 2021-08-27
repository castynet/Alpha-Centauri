import { useState } from "react";
import * as styled from "./user.styles";

export default function DashBoard() {
  const [openUser, setOpenUser] = useState(false);

  const expandUser = () => {
    openUser ? setOpenUser(false) : setOpenUser(true);
  };

  return (
    <>
      <styled.Wrapper>
        <styled.ProfileIcon openUser={openUser} onClick={() => expandUser()}></styled.ProfileIcon>
      </styled.Wrapper>
    </>
  );
}
