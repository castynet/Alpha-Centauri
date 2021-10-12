import * as styled from "./accMgmt.styles";

export default function AccountManagement() {
  return (
    <>
      <styled.Wrapper>
        <styled.Avatar src="" alt="Avatar" />
        <p>first name</p>
        <p>last name</p>
        <p>username</p>
        <p>email</p>
        <p>phone number</p>
        <p>email</p>
        <p>password</p>
        <p>linked accounts</p>
        <p>parent's phone number</p>
        <p>checkbox | use same number for payments</p>
        <p>no? enter phone number</p>
        <styled.DeleteBtn>Delete Account</styled.DeleteBtn>
      </styled.Wrapper>
    </>
  );
}
