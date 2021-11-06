import { useState } from "react";
import * as styled from "./accMgmt.styles";
import { Icons } from "../icons.styles";
import { useApp } from "../context";

export default function AccountManagement() {
  const app = useApp();

  const [displayName, setDisplayName] = useState(app.user.displayName);
  const [email, setEmail] = useState(app.user.email);
  const [username, setUsername] = useState(app.user.username);
  const [parentName, setParentName] = useState(app.user.parentName);
  const [parentEmail, setParentEmail] = useState(app.user.parentEmail);
  const [parentPhone, setParentPhone] = useState(app.user.parentPhone);
  const [mpesaPhone, setMpesaPhone] = useState("true");
  const [dob, setDob] = useState(app.user.dob);

  const handleSubmit = () => {
    const content = {
      displayName: displayName,
      email: email,
      username: username,
      parentName: parentName,
      parentEmail: parentEmail,
      parentPhone: parentPhone,
      mpesaPhone: mpesaPhone,
      dob: dob,
    };
    app.AddUserToDb(content, app.userRef);
  };

  return (
    <>
      <styled.Wrapper>
        <styled.SectionTitle>Personal Details</styled.SectionTitle>
        <styled.Avatar src={app.user.avatar} alt="Avatar" />
        <br />
        <styled.Label htmlFor="userName">
          <styled.InnerLabel>Username:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="text"
          id="userName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="Name">
          <styled.InnerLabel>Name:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="text"
          id="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="dob">
          <styled.InnerLabel>Date of Birth:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="date"
          id="dob"
          value={dob !== "initial" ? dob : app.user.dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="email">
          <styled.InnerLabel>Email:</styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <styled.SectionTitle>Linked Accounts</styled.SectionTitle>
        <p>
          <styled.Google size="40" />
        </p>
        <styled.SectionTitle>Parent's Details</styled.SectionTitle>
        <styled.Label htmlFor="parentName">
          <styled.InnerLabel>Name: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="text"
          id="parentName"
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="parentEmail">
          <styled.InnerLabel>Email: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="text"
          id="parentEmail"
          value={parentEmail}
          onChange={(e) => setParentEmail(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="phoneNumber">
          <styled.InnerLabel>Phone: </styled.InnerLabel>
          <Icons.Edit size="18" />
        </styled.Label>
        <styled.Input
          type="number"
          id="phoneNumber"
          value={parentPhone}
          onChange={(e) => setParentPhone(e.target.value)}
        />
        <br />
        <styled.Label htmlFor="phoneNumberPayments">
          Use the same number for payments
        </styled.Label>
        <styled.Input
          className="checkbox"
          type="checkbox"
          name="phoneNumberPayments"
          id="phoneNumberPayments"
          value={
            mpesaPhone === "true" || mpesaPhone === parentPhone
              ? "false"
              : "true"
          }
          checked={mpesaPhone === "true" || mpesaPhone === parentPhone}
          onChange={(e) => setMpesaPhone(e.target.value)}
        />
        <br />
        <styled.AltMpesaNumber mpesaPhone={mpesaPhone}>
          <styled.Label htmlFor="parentPhoneNumber">
            <styled.InnerLabel>Mpesa Phone: </styled.InnerLabel>
            <Icons.Edit size="18" />
          </styled.Label>
          <styled.Input
            type="number"
            id="parentPhoneNumber"
            value={
              mpesaPhone === "false" || mpesaPhone === "true"
                ? "07"
                : mpesaPhone
            }
            onChange={(e) => setMpesaPhone(e.target.value)}
          />
          {/* <p>no? enter phone number</p> */}
        </styled.AltMpesaNumber>
        <styled.SaveBtn
          type="submit"
          value="Save Info"
          onClick={() => handleSubmit()}
        />
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
