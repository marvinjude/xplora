import ContentLoader from "react-content-loader";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  padding: 1rem;
`;

const Sidebar = () => (
  <LoaderWrapper>
    <ContentLoader
      speed={2}
      width={207}
      height={113}
      viewBox="0 0 207 113"
      backgroundColor="#b1abab29"
      foregroundColor="#ffffff6f"
    >
      <path d="M 0 0 h 207 v 17 H 0 z M 0 62 h 207 v 17 H 0 z" />
      <path d="M 0 0 h 207 v 17 H 0 z M 0 62 h 207 v 17 H 0 z M 28 28 h 90 v 17 H 28 z" />
      <path d="M 28 28 h 90 v 17 H 28 z M 28 96 h 90 v 17 H 28 z" />
    </ContentLoader>
  </LoaderWrapper>
);

export { Sidebar };
