import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const Title = styled.h1`
  background-color: white;
  margin: 0 0 10px 0;
  padding: 20px;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  font-size: 1.3em;
  text-decoration: underline;
`;

export const PaymentWrapper = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Payment = styled.div`
  background-color: white;
  height: fit - content;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 20px 20px 20px 30px;
  margin: 15px 0;
  width: 300px;
  height: 190px;
`;

export const PaymentTitle = styled.h4`
  margin-bottom: 10px;
  text-align: center;
`;

export const Indicator = styled.div`
  background-color: ${(props) => (props.success ? "limegreen" : "#ccc")};
  height: 190px;
  width: 20px;
  float: left;
  margin-left: -30px;
  margin-top: -20px;
`;
