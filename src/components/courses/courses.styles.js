import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #88889980;
  padding: 30px;
`;

export const CourseWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Course = styled.div`
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

export const Title = styled.div`
  background-color: white;
  margin: 0 0 10px 0;
  border-radius: var(--borderRadius);
  box-shadow: var(--levelOneDropShadow);
  text-decoration: underline;

  h2 {
    padding: 10px 10px 10px 40px;
    display: inline-block;
    font-size: 1.3em;
    transition: var(--smoothTransition);
    width: 200px;
  }
`;

export const CourseTitle = styled.h3`
  height: 63px;
`;

export const CourseImage = styled.img`
  width: 100%;
  border-radius: var(--borderRadius);
`;

export const ImageCrop = styled.div`
  height: 180px;
  overflow: hidden;
  border-radius: var(--borderRadius);
`;

export const CourseInfo = styled.div`
  p {
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;

export const CourseLang = styled.p`
  background-color: #88889980;
  border-radius: 1000px;
  padding: 2px 15px;
`;

export const Cost = styled.p`
  text-decoration: underline;
`;

export const AltB = styled.h2`
  background-color: lightblue;

  &:hover {
    padding: 7px 10px 7px 40px;
    margin: 3px 0;
    background-color: #3fb7de;
    box-shadow: var(--levelTwoDropShadow);
    cursor: pointer;
  }
`;
