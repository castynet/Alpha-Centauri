import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApp } from "../context";
import Loading from "../general/loading";
import * as styled from "./singleCourse.styles";
import { addCommaToNumber } from "../general/utilities";
import { Link } from "react-router-dom";

export default function SingleCourse() {
  const app = useApp();
  const params = useParams();
  const [course, setCourse] = useState(null);

  const selectedCourse = app.courses.find(
    // if course can be found in user courses then show that course
    (course) => course.slug === params.slug
  );

  useEffect(() => {
    setCourse(selectedCourse);
    if (app.payments.length === 0) {
      app.getPayments();
    }
  }, [selectedCourse, app]);

  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  const handleSubscribe = () => {
    if (app.plan) {
      app.addCourseToUser(course.title);
    } else {
      app.setView("Subscribe");
    }
  };

  const location = () => {
    return !app.plan ? "/" : "";
  };

  return (
    <>
      {course ? (
        <>
          <styled.Wrapper>
            <styled.CourseTitle>{course.title}</styled.CourseTitle>
            <styled.InfoSection>
              <styled.ImageWrapper>
                <styled.Image src={course.displayImg} />
              </styled.ImageWrapper>
              <styled.Info>
                <p>
                  <styled.Tag>Language</styled.Tag>
                  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {course.lang}
                </p>
                <p>
                  <styled.Tag>Cost</styled.Tag>:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  KSh {addCommaToNumber(course.cost)}
                </p>
                <p>
                  <styled.Tag>Registered Students</styled.Tag>
                  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {course.registeredStd}
                </p>
                <p>
                  <styled.Tag>Est Duration</styled.Tag>
                  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 30 Hours
                </p>
                <p>
                  <styled.Tag>Tutor</styled.Tag>
                  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; John Doe
                </p>
                <Link style={style} to={location()}>
                  <styled.Subscribe onClick={() => handleSubscribe()}>
                    {app.plan
                      ? "Add Course to my Catalogue"
                      : "Purchase Course"}
                  </styled.Subscribe>
                </Link>
                <p>
                  <styled.Note>**</styled.Note> all courses are free with a
                  monthly subscription
                </p>
              </styled.Info>
            </styled.InfoSection>
            <styled.DescriptionTitle>Description</styled.DescriptionTitle>
            <styled.Description>
              The class is ideal for a student has some or no programming
              skills. Object oriented programming can seem like daunting to
              absolute beginners but this class provides an easy way these
              concepts using learn Python Programming Language. Learn the best
              practices and begin text based coding immediately on the following
              learning areas: Explore Python data types and how to work with
              variables &middot; Perform calculations with number variables,
              manipulating strings and getting input from a user &middot; Using
              a list, dictionary and tuples &middot; Working with Boolean
              values, comparison operators &amp; operators &middot; Using loops
              to repeats programming statements and blocks of code automatically
              &middot; Reusing code using functions &middot; Drawing with
              turtles &middot; Putting it all together: using variables, loops,
              user defined functions, functions with parameters and conditional
              statements to draw with turtles
            </styled.Description>
          </styled.Wrapper>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
