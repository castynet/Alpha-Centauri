import * as styled from "./tests.styles";
import { useEffect } from "react";
import { useApp } from "../../context";
import Loading from "../../general/loading";
import { Link } from "react-router-dom";
import { Icons } from "../../icons.styles";

export default function Tests() {
  const app = useApp();

  useEffect(() => {
    if (app.tests.length === 0) {
      app.getTests();
    }
  }, [app]);

  const Ldng = (param) => {
    return param.loaded > 3000 ? (
      <p>No Tests</p>
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

  const convertTime = (n) =>
    `0${(n / 60) ^ 0}`.slice(-2) + ":" + ("0" + (n % 60)).slice(-2);

  return (
    <>
      <styled.Wrapper>
        <styled.Title>Tests</styled.Title>
        {app.tests.length === 0 ? (
          <Ldng
            loaded={setTimeout(() => {
              return true;
            }, 3000)}
          />
        ) : (
          <styled.TestWrapper>
            {app.tests.map((e) => (
              <Link
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                to={`/tests/${e.slug}`}
                key={e.slug}
              >
                <styled.Test>
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
                    <span>Est Duration</span>:&nbsp;&nbsp;
                    {convertTime(e.estDuration)}
                  </p>
                  <div>
                    <Icons.ArrowDown size="30" />
                  </div>
                </styled.Test>
              </Link>
            ))}
          </styled.TestWrapper>
        )}
      </styled.Wrapper>
    </>
  );
}
