import { useEffect } from "react";
import * as styled from "./payments.styles";
import { useApp } from "../context";
import Loading from "../general/loading";
import { getTime } from "../general/utilities";

export default function Payments() {
  const app = useApp();

  useEffect(() => {
    if (app.payments.length === 0) {
      app.getPayments();
    }
  }, [app]);

  const Ldng = (param) => {
    return param.loaded > 3000 ? (
      <p>No payments</p>
    ) : (
      <>
        <Loading />
      </>
    );
  };

  return (
    <>
      <styled.Wrapper>
        <styled.Title>Payments</styled.Title>
        <styled.PaymentWrapper>
          {app.payments.length === 0 ? (
            <Ldng
              loaded={setTimeout(() => {
                return true;
              }, 3000)}
            />
          ) : (
            <>
              {app.payments.map((payment) => (
                <styled.Payment
                  key={payment.timestamp}
                  
                >
                  <styled.Indicator success={payment.success}></styled.Indicator>
                  <styled.PaymentTitle>
                    Time:{" "}
                    {payment.timestamp
                      ? getTime(payment.timestamp)
                      : "Not Available"}
                  </styled.PaymentTitle>
                  <p>
                    Result:{" "}
                    {payment.ResultCode === "1032"
                      ? "Payment Cancelled"
                      : payment.ResultCode === "0"
                      ? "Payment Successful"
                      : "Error with the Payment"}
                  </p>
                  <p>Phone: {payment.PhoneNumber}</p>
                  <p>Plan: {payment.plan}</p>
                  <p>Amount: KSh 1</p>
                </styled.Payment>
              ))}
            </>
          )}
        </styled.PaymentWrapper>
      </styled.Wrapper>
    </>
  );
}
