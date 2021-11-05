import * as styled from "./accMgmt.styles";
import { Icons } from "../icons.styles";

export default function AccountManagement() {
  return (
    <>
      <styled.Wrapper>
        <styled.SectionTitle>Personal Details</styled.SectionTitle>
        <styled.Avatar src="" alt="Avatar" />
        <br />
        <styled.Label htmlFor="userName">
          <styled.InnerLabel>Username:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="userName" />
        <br />
        <styled.Label htmlFor="Name">
          <styled.InnerLabel>Name:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="firstName" />
        <br />
        <styled.Label htmlFor="dob">
          <styled.InnerLabel>Date of Birth:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="date" id="dob" />
        <br />
        <styled.Label htmlFor="email">
          <styled.InnerLabel>Email:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="email" />
        <styled.SectionTitle>Linked Accounts</styled.SectionTitle>
        <p>
          <styled.Google size="40" />
        </p>
        <styled.SectionTitle>Parent's Details</styled.SectionTitle>
        <styled.Label htmlFor="parentName">
          <styled.InnerLabel>Name: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="parentName" />
        <br />
        <styled.Label htmlFor="parentEmail">
          <styled.InnerLabel>Email: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="parentEmail" />
        <br />
        <styled.Label htmlFor="phoneNumber">
          <styled.InnerLabel>Phone: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="phoneNumber" />
        <br />
        <styled.Input
          type="checkbox"
          name="phoneNumberPayments"
          id="phoneNumberPayments"
        />
        <styled.Label htmlFor="phoneNumberPayments">
          Use the same number for payments
        </styled.Label>
        <br />
        <styled.Label htmlFor="parentPhoneNumber">
          <styled.InnerLabel>Mpesa Phone: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="text" id="parentPhoneNumber" />
        {/* <p>no? enter phone number</p> */}
        <styled.SectionTitle>Critical</styled.SectionTitle>
        <styled.Label htmlFor="currentPassword">
          <styled.InnerLabel>Current Password:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="password" id="currentPassword" />
        <br />
        <styled.Label htmlFor="newPassword">
          <styled.InnerLabel>New Password:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="password" id="newPassword" />
        <styled.Label htmlFor="confirmPassword">
          <styled.InnerLabel>Confirm Password:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input type="password" id="confirmPassword" />
        <br />
        <styled.DeleteBtn>Delete Account</styled.DeleteBtn>
      </styled.Wrapper>
    </>
  );
}
