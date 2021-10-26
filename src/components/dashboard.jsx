import * as styled from "./dashboard.styles";
import Search from "./general/search";
import { Icons } from "./icons.styles";
import Assignments from "./courses/assignments/assignments";

export default function DashBoard() {
  return (
    <>
      <styled.Wrapper>
        <styled.Sidebar>
          <styled.Menu>
            <styled.MenuItem>
              <Icons.Book size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Courses
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Assignment size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Assignments
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Tests size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Tests
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Community size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Community
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Certificate size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Certificates
            </styled.MenuItem>
          </styled.Menu>
          <styled.BrowseMenu>
            <styled.BrowseMenuItem>
              <Icons.Message size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; Messages
            </styled.BrowseMenuItem>
            <styled.BrowseMenuItem>
              <Icons.AllCourses size="18" title="View Courses" color="white" />
              &nbsp;&nbsp;&nbsp; All Courses
            </styled.BrowseMenuItem>
          </styled.BrowseMenu>
        </styled.Sidebar>
        <styled.Main>
          <Search />
          <Assignments />
        </styled.Main>
      </styled.Wrapper>
    </>
  );
}
