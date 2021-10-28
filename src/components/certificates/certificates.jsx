import * as styled from "./certificates.styles";

export default function Certificates() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title>Certificates</styled.Title>
        <styled.CertificateWrapper>
          {[...Array(5)].map((e, i) => (
            <styled.Certificate>
              issue date <br /> course <br />
              download <br />
              view view in popup
            </styled.Certificate>
          ))}
        </styled.CertificateWrapper>
      </styled.Wrapper>
    </>
  );
}
