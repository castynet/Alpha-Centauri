import { useState, useEffect } from "react";
import * as styled from "./subscribe.styles";
import { useApp } from "../context";
import { mpesaNumberCheck } from "../general/utilities";

export default function Subscribe() {
  const app = useApp();
  const [plan, setPlan] = useState(app.plan);
  const [phone, setPhone] = useState(app.user.mpesaPhone);

  const handleClick = (subscription) => {
    if (!app.user.plan) {
      setPlan(subscription);
      setPhone(phone);
    }
  };

  useEffect(() => {
    if (app.payments.length === 0) {
      app.getPayments();
    }
  }, [app]);

  const handleSubscribe = () => {
    if (plan && phone) {
      const cleanNumber = mpesaNumberCheck(phone);
      app.subscribe(plan, cleanNumber);
      app.setPopup({
        type: "info",
        message: "Trying to reach Mpesa...",
        title: "Payment initiated",
        open: true,
      });
    }
  };

  const Ico = (props) => {
    return props.checking === plan ? (
      <styled.Check />
    ) : plan ? (
      <styled.Close />
    ) : null;
  };

  const subscribedPlan = (checking) => {
    return checking === plan ? true : plan ? false : null;
  };

  return (
    <>
      <styled.Wrapper>
        <styled.SectionTitle>Pick your plan</styled.SectionTitle>
        <styled.Info>
          Our plans give you unlimited access to our courses, tutors &amp;
          mentors.
        </styled.Info>
        <styled.PlanWrapper>
          <styled.Plan selected={subscribedPlan("Pro")}>
            <Ico checking="Pro" />
            <styled.Duration>Prepaid - 6 Months</styled.Duration>
            <styled.PlanTitle>Pro</styled.PlanTitle>
            <p>Try out the platform for 6 months</p>
            <styled.Amount>300 KSh/month</styled.Amount>
            <styled.SubscribeButton
              onClick={() => handleClick("Pro")}
              selected={subscribedPlan("Pro")}
            >
              {app.plan === "Pro"
                ? "Subscribed"
                : plan === "Pro"
                ? "Selected"
                : plan === "Pro Max"
                ? "Downgrade"
                : "Select Plan"}
            </styled.SubscribeButton>
          </styled.Plan>
          <styled.Plan selected={subscribedPlan("Pro Max")}>
            <Ico checking="Pro Max" />
            <styled.Duration>Prepaid - 12 Months</styled.Duration>
            <styled.PlanTitle>Pro Max</styled.PlanTitle>
            <p>Get 12 months access &amp; save 50%</p>
            <styled.Amount>200 KSh/month</styled.Amount>
            <styled.SubscribeButton
              onClick={() => handleClick("Pro Max")}
              selected={subscribedPlan("Pro Max")}
            >
              {app.plan === "Pro Max"
                ? "Subscribed"
                : plan === "Pro Max"
                ? "Selected"
                : plan === "Pro"
                ? "Upgrade"
                : "Select Plan"}
            </styled.SubscribeButton>
          </styled.Plan>
        </styled.PlanWrapper>
        <styled.InputWrapper>
          <styled.InputLabel htmlFor="confirmYourNumber">
            Confirm your Mpesa Number
          </styled.InputLabel>
          <styled.Input
            type="number"
            id="confirmYourNumber"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </styled.InputWrapper>
        <styled.SubmitButton onClick={() => handleSubscribe()}>
          Initialize Payment
        </styled.SubmitButton>
      </styled.Wrapper>
    </>
  );
}
