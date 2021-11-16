import { useEffect } from "react";
import * as styled from "./assignments.styles";
import { useApp } from "../../context";
import Loading from "../../general/loading";
import { Link } from "react-router-dom";
import { Icons } from "../../icons.styles";

export default function Assignments() {
  const app = useApp();

  useEffect(() => {
    if (app.assignment.length === 0) {
      app.getAssignments();
    }
  }, [app]);

  const Ldng = (param) => {
    return param.loaded > 3000 ? (
      <p>No Assignments</p>
    ) : (
      <>
        <Loading />
      </>
    );
  };

  const getDate = (date) => {
    var dt = new Date();
    dt.setTime(date * 1000);
    return dt.toDateString();
  };

  return (
    <>
      <styled.Wrapper>
        <styled.Title>Assignments</styled.Title>
        {app.assignment.length === 0 ? (
          <Ldng
            loaded={setTimeout(() => {
              return true;
            }, 3000)}
          />
        ) : (
          <styled.AssignmentWrapper>
            {app.assignment.map((e) => (
              <Link
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                to={`/assignments/${e.slug}`}
                key={e.slug}
              >
                <styled.Assignment>
                  <div>
                    <Icons.ArrowRight size="30" />
                  </div>
                  <h3>{e.title}</h3>
                  <p>
                    <span>Due Date</span>:&nbsp;&nbsp;
                    {getDate(e.dueDate.seconds)}
                  </p>
                  <p>
                    <span>Grade</span>:&nbsp;&nbsp;
                    {e.grade ? e.grade : "Not available"}
                  </p>
                  <p>
                    <span>Estimated Duration</span>:&nbsp;&nbsp;
                    {e.estDuration / 60} Hours
                  </p>
                </styled.Assignment>
              </Link>
            ))}
          </styled.AssignmentWrapper>
        )}
      </styled.Wrapper>
    </>
  );
}
