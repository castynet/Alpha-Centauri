import * as styled from "./accMgmt.styles";

export default function AccountManagement() {
  return (
    <>
      <styled.Wrapper>
        <styled.SectionTitle>Personal Details</styled.SectionTitle>
        <styled.Avatar src="" alt="Avatar" />
        <br />
        <styled.Label htmlFor="userName">Username: </styled.Label>
        <styled.Input type="text" id="userName" />
        <br />
        <styled.Label htmlFor="firstName">First Name: </styled.Label>
        <styled.Input type="text" id="firstName" />
        <br />
        <styled.Label htmlFor="lastName">Last Name: </styled.Label>
        <styled.Input type="text" id="lastName" />
        <br />
        <styled.Label htmlFor="email">Email: </styled.Label>
        <styled.Input type="text" id="email" />
        <styled.SectionTitle>Linked Accounts Details</styled.SectionTitle>
        <p>Google</p>
        <styled.SectionTitle>Parent's Details</styled.SectionTitle>
        <styled.Label htmlFor="parentName">Name: </styled.Label>
        <styled.Input type="text" id="parentName" />
        <br />
        <styled.Label htmlFor="parentEmail">Email: </styled.Label>
        <styled.Input type="text" id="parentEmail" />
        <br />
        <styled.Label htmlFor="phoneNumber">Phone: </styled.Label>
        <styled.Input type="text" id="phoneNumber" />
        <br />
        <styled.Input type="checkbox" name="" id="" />
        <styled.Label htmlFor="phoneNumberPayments">
          Use the same number for payments:
        </styled.Label>
        {/* <p>no? enter phone number</p> */}
        <styled.SectionTitle>Critical</styled.SectionTitle>
        <p>password</p>
        <styled.DeleteBtn>Delete Account</styled.DeleteBtn>
      </styled.Wrapper>
    </>
  );
}
