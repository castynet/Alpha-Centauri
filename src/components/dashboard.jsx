import * as styled from "./styles/dashboard.styles";
import Search from "./search";
import { Icons } from "./styles/icons.styles";
import Courses from "./courses";

export default function DashBoard() {
  return (
    <>
      <styled.Wrapper>
        <styled.Sidebar>
          <styled.Menu>
            <styled.MenuItem>
              <Icons.Book size="18" title="View Courses" /> Courses
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Assignment size="18" title="View Courses" /> Assignments
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Tests size="18" title="View Courses" /> Tests
            </styled.MenuItem>
            <styled.MenuItem>
              <Icons.Community size="18" title="View Courses" /> Community
            </styled.MenuItem>
          </styled.Menu>
          <styled.BrowseMenu>
            <styled.BrowseMenuItem>
              <Icons.Message size="18" title="View Courses" /> Messages
            </styled.BrowseMenuItem>
            <styled.BrowseMenuItem>
              <Icons.AllCourses size="18" title="View Courses" /> All Courses
            </styled.BrowseMenuItem>
          </styled.BrowseMenu>
        </styled.Sidebar>
        <styled.Main>
          <Search />
          <Courses />
        </styled.Main>
      </styled.Wrapper>
    </>
  );
}
