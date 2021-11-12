import * as styled from "./dashboard.styles";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { Icons } from "./icons.styles";
import { useApp } from "./context";

import Search from "./general/search";
import Community from "./community/community";
import Courses from "./courses/courses";
import Assignments from "./courses/assignments/assignments";
import Quizzes from "./courses/quizzes/tests";
import Certificates from "./certificates/certificates";
import AccMgmt from "./account/accMgmt";
import Subscribe from "./account/subscribe";
import SingleCourse from "./courses/singleCourse";

export default function DashBoard() {
  const app = useApp();
  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  const View = () => {
    switch (app.view) {
      case "Community":
        return <Community />;
      case "My Courses":
        return <Courses />;
      case "All Courses":
        return <Courses />;
      case "Assignments":
        return <Assignments />;
      case "Quizzes":
        return <Quizzes />;
      case "Certificates":
        return <Certificates />;
      case "AccMgmt":
        return <AccMgmt />;
      case "Subscribe":
        return <Subscribe />;
      default:
        return <Courses />;
    }
  };

  const handleView = (view) => {
    app.setView(view);
  };

  return (
    <>
      <styled.Wrapper>
        <styled.Sidebar>
          <styled.Menu>
            <Link style={style} to={"/"}>
              <styled.MenuItem onClick={() => handleView("My Courses")}>
                <Icons.Book size="18" title="View Courses" color="white" />
                &nbsp;&nbsp;&nbsp; Courses
              </styled.MenuItem>
            </Link>
            <Link style={style} to={"/"}>
              <styled.MenuItem onClick={() => handleView("Assignments")}>
                <Icons.Assignment size="18" title="Assignments" color="white" />
                &nbsp;&nbsp;&nbsp; Assignments
              </styled.MenuItem>
            </Link>
            <Link style={style} to={"/"}>
              <styled.MenuItem onClick={() => handleView("Quizzes")}>
                <Icons.Tests size="18" title="Quizzes" color="white" />
                &nbsp;&nbsp;&nbsp; Tests
              </styled.MenuItem>
            </Link>
            <Link style={style} to={"/"}>
              <styled.MenuItem onClick={() => handleView("Community")}>
                <Icons.Community size="18" title="Community" color="white" />
                &nbsp;&nbsp;&nbsp; Community
              </styled.MenuItem>
            </Link>
            <Link style={style} to={"/"}>
              <styled.MenuItem onClick={() => handleView("Certificates")}>
                <Icons.Certificate
                  size="18"
                  title="Certificates"
                  color="white"
                />
                &nbsp;&nbsp;&nbsp; Certificates
              </styled.MenuItem>
            </Link>
          </styled.Menu>
          <styled.BrowseMenu>
            <Link style={style} to={"/"}>
              <styled.BrowseMenuItem onClick={() => handleView("Subscribe")}>
                <Icons.Subscribe size="18" title="Subscribe" color="white" />
                &nbsp;&nbsp;&nbsp; Subscribe
              </styled.BrowseMenuItem>
            </Link>
            <Link style={style} to={"/"}>
              <styled.BrowseMenuItem onClick={() => handleView("All Courses")}>
                <Icons.AllCourses
                  size="18"
                  title="View Courses"
                  color="white"
                />
                &nbsp;&nbsp;&nbsp; All Courses
              </styled.BrowseMenuItem>
            </Link>
          </styled.BrowseMenu>
        </styled.Sidebar>
        <styled.Main>
          <Search />
          <Routes>
            <Route path="/courses/:slug" element={<SingleCourse />} />
            <Route path="*" element={<View />} />
          </Routes>
        </styled.Main>
      </styled.Wrapper>
    </>
  );
}
