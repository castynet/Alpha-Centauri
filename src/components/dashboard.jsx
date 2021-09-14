import * as styled from "./styles/dashboard.styles";

export default function DashBoard() {
  return (
    <>
      <styled.Wrapper>
        <styled.Sidebar>
          <styled.Menu>
            <styled.MenuItem>Courses</styled.MenuItem>
            <styled.MenuItem>Assignments</styled.MenuItem>
            <styled.MenuItem>Tests</styled.MenuItem>
            <styled.MenuItem>Community</styled.MenuItem>
          </styled.Menu>
          <styled.BrowseMenu>
            <styled.BrowseMenuItem>Messages</styled.BrowseMenuItem>
            <styled.BrowseMenuItem>All Courses</styled.BrowseMenuItem>
          </styled.BrowseMenu>
        </styled.Sidebar>
        <styled.Main></styled.Main>
      </styled.Wrapper>
    </>
  );
}
