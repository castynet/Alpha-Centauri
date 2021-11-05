import * as styled from "./auth.styles";
import { Icons } from "../icons.styles";
import { useApp } from "../context";

export default function Auth() {
  const app = useApp();

  return (
    <>
      <styled.Wrapper>
        <styled.Title>Sign in to Alpha Centauri</styled.Title>
        <styled.ButtonWrapper>
          <styled.Button onClick={() => app.signIn()}>
            <Icons.Google size="20" />
            <styled.BtnText>Continue with Google</styled.BtnText>
          </styled.Button>
          <styled.Button>
            <Icons.Login size="20" />
            <styled.BtnText>Login with your Email</styled.BtnText>
          </styled.Button>
          <styled.Button>
            <Icons.Register size="20" />
            <styled.BtnText>Register with your Email</styled.BtnText>
          </styled.Button>
        </styled.ButtonWrapper>
      </styled.Wrapper>
    </>
  );
}
