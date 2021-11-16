import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  margin: 20px;
  background-color: lightblue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom-right-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
  box-shadow: var(--levelTwoDropShadow);
  border: 1px solid #444;
`;

export const Overlay = styled.div`
  display: block;
  background-color: #0008;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export const TitleBar = styled.div`
  background-color: ${(props) =>
    props.type === "success"
      ? "lightgreen"
      : props.type === "error"
      ? "lightpink"
      : "burlywood"};
  border-bottom: 1px solid #444;
  padding: 4px 0;
  min-height: 38px;
`;

export const Title = styled.h4`
  text-align: center;
`;

export const Content = styled.p`
  margin: 20px;
`;

export const Status = styled.p`
  margin: 20px;
`;

export const CloseButton = styled.button`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: none;
  background-color: #ff5c5c;
  border-radius: 50%;
  font-size: 0.6em;
  font-weight: 700;
  margin: 5px 10px;
  position: fixed;
  cursor: pointer;
`;

export const Okay = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  border-bottom-right-radius: var(--borderRadius);
  border-bottom-left-radius: var(--borderRadius);
  cursor: pointer;
  transition: var(--smoothTransition);

  &:hover {
    background-color: #ddd;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

const loaderAnimation = keyframes`
     0% {
         left: -100%;
     }
     49% {
         left: 100%;
     }
     50% {
         left: 100%;
     }
     100% {
         left: -100%;
        }
 `;

export const LineAnimation = styled.div`
  height: 5px;
  width: 100%;
  overflow: hidden;

  .bar {
    position: relative;
    height: 5px;
    width: 100%;
    background-color: dodgerblue;
    animation: ${loaderAnimation} 3s ease-in-out infinite;
  }
`;
