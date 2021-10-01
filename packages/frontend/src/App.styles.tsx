import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors["editor.background"]};
`;

const StyledSidebar = styled.div`
  background-color: ${(props) => props.theme.colors["sideBar.background"]};
  border-right: 1px solid ${(props) => props.theme.colors["border"]};
  overflow-y: auto;
  height: 100%;
  padding-bottom: 5rem;

  /* Set base font size for sidebar */
  font-size: 12.5px;
`;

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors["editor.background"]};
  border-bottom: 1px solid ${(props) => props.theme.colors["border"]};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledMain = styled.main`
  flex: 1 1 0;
  overflow: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 20rem;
  padding-bottom: 15rem;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 9999px;
`;

const InnerSideBar = styled.div`
  background: whitesmoke;
  width: 50px;
  z-index: 30;
`;

export {
  AppWrapper,
  Container,
  StyledSidebar,
  StyledHeader,
  StyledMain,
  Avatar,
  InnerSideBar,
};
