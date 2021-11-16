import * as styled from "./alertBox.styles";
import { useApp } from "../context";

export default function AlertBox() {
  const app = useApp();

  return (
    <>
      <styled.Overlay>
        <styled.Wrapper>
          <styled.TitleBar type={app.popup.type}>
            <styled.CloseButton onClick={() => app.setPopup({ show: false })}>
              x
            </styled.CloseButton>
            <styled.Title>{app.popup.title}</styled.Title>
          </styled.TitleBar>
          <styled.Content>{app.popup.message}</styled.Content>
          <styled.LineAnimation>
            <div className="bar"></div>
          </styled.LineAnimation>
          <styled.Okay onClick={() => app.setPopup({ show: false })}>
            OK
          </styled.Okay>
        </styled.Wrapper>
      </styled.Overlay>
    </>
  );
}
