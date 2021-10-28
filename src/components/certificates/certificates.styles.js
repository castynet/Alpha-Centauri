import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const Certificate = styled.div`
  background-color: white;
  width: 350px;
  height: fit-content;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 10px;

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const CertificateWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
`;

export const Title = styled.div`
  background-color: white;
  margin: 0 0 10px 0;
  padding: 10px 10px 10px 40px;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  font-size: 1.3em;
  text-decoration: underline;
`;
