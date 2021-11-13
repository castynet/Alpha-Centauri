import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 30px;
  padding: 20px;
  background-color: white;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  transition: var(--smoothTransition);
`;

export const CourseTitle = styled.h2`
  border-bottom: solid 1px #aaa;
  padding: 5px 0;
  margin: 0 0 10px;
  text-align: center;
  text-transform: capitalize;
`;

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0 30px;
`;

export const ImageWrapper = styled.div`
  width: 500px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  width: 400px;
`;

export const DescriptionTitle = styled.h3`
  text-transform: capitalize;
  border-bottom: solid 1px #aaa;
`;

export const Tag = styled.span`
  display: inline-block;
  width: 200px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const Subscribe = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 8px 25px;
  border: none;
  border-radius: 1000px;
  box-shadow: var(--levelOneDropShadow);
  background-color: lightskyblue;
  transition: var(--smoothTransition);

  &:hover {
    cursor: pointer;
    box-shadow: var(--levelTwoDropShadow);
  }
`;

export const Note = styled.span`
  color: red;
`;
