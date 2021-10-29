import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const Title = styled.h1`
  background-color: white;
  margin: 0 0 10px 0;
  padding: 10px 10px 10px 40px;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  font-size: 1.3em;
  text-decoration: underline;
`;

export const PostWrapper = styled.div`
  margin: 30px 0 0 0;
`;

export const Post = styled.div`
  background-color: white;
  height: fit-content;
  box-shadow: var(--levelOneDropShadow);
  border-radius: var(--borderRadius);
  transition: var(--smoothTransition);
  padding: 10px;
  margin: 15px 0;

  :hover {
    box-shadow: var(--levelTwoDropShadow);
  }
`;
