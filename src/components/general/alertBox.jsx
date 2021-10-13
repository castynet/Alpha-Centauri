import * as styled from "./alertBox.styles";

export default function AlertBox(props) {
  const type = props.type;

  const GeneralAlert = () => {
    return <p>{type}</p>;
  };

  const DeleteAcc = () => {
    return <p>Deleting account</p>;
  };

  const ProcessingPayment = () => {
    return <p>Processing payment</p>;
  };

  const PaymentProcessed = () => {
    return <p>Payment processed</p>;
  };

  const PaymentFailed = () => {
    return <p>Payment failed</p>;
  };

  return (
    <>
      <styled.Wrapper>
        {type === "DeleteAcc" ? (
          <DeleteAcc />
        ) : type === "PaymentProcessed" ? (
          <PaymentProcessed />
        ) : type === "PaymentFailed" ? (
          <PaymentFailed />
        ) : type === "ProcessingPayment" ? (
          <ProcessingPayment />
        ) : (
          <GeneralAlert />
        )}
      </styled.Wrapper>
    </>
  );
}
