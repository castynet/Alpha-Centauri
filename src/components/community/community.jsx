import * as styled from "./community.styles";

export default function Community() {
  return (
    <>
      <styled.Wrapper>
        <styled.Title>Community</styled.Title>
        <styled.PostWrapper>
          {[...Array(5)].map((e, i) => (
            <styled.Post>
              community post <br />
              title <br />
              type post download etc <br />
              likes <br />
              comments <br />
              view <br />
            </styled.Post>
          ))}
        </styled.PostWrapper>
      </styled.Wrapper>
    </>
  );
}
