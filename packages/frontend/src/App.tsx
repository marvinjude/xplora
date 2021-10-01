import { useState } from "react";
import { ThemeProvider } from "styled-components";

import useDidUpdateEffect from "./hooks/useDidUpdateEffect";
import { Sidebar as SidebarShimmer } from "./components/Shimmers";
import Resizable from "./components/Resizable";
import Indicator from "./components/Indicator";
import Section from "./components/Section";
import File from "./components/File";
import Logo from "./icons/Logo";

import { GlobalStyles } from "./GlobalsStyles";
import useFileTree from "./hooks/useFileTree";
import { palenight } from "./themes";

import {
  AppWrapper,
  Container,
  StyledSidebar,
  StyledHeader,
  StyledMain,
  Avatar,
  InnerSideBar,
} from "./App.styles";
import PlaceholderIcon from "./icons/PlaceholderIcon";

const renderFileAndFolders = (filesTree: any) => {
  const folders = Object.entries(filesTree);

  return folders.map((folderfileAndSubFolder) => {
    const [folder, subFolder]: [string, any] = folderfileAndSubFolder;
    const { files, isRoot, ...otherFolders } = subFolder;
    const filesAndFolders = renderFileAndFolders(otherFolders);

    return (
      <Section title={folder} inner={!isRoot}>
        {filesAndFolders}
        {files.map((file: any) => (
          <File name={file.name} extension={file.name.split(".").pop()} />
        ))}
      </Section>
    );
  });
};

function App() {
  const { filesTree, isLoadingFiles } = useFileTree();
  const [showUpdateIndicator, setShowUpdateIndicator] = useState(false);

  const user = {
    avatar: "https://avatars2.githubusercontent.com/u/17142206?v=4",
  };

  //When file tree changes
  useDidUpdateEffect(() => {
    //set set notification
    setShowUpdateIndicator(true);
    // Create timer to remove  notification
    const indicatorTimer = setTimeout(() => {
      setShowUpdateIndicator(false);
    }, 2000);

    return () => {
      clearTimeout(indicatorTimer);
    };
  }, [filesTree]);

  return (
    <ThemeProvider theme={palenight}>
      <AppWrapper>
        {showUpdateIndicator && <Indicator />}
        <StyledHeader>
          <Logo />
          <Avatar src={user.avatar} />
        </StyledHeader>
        <Container>
          <InnerSideBar />
          <Resizable>
            <StyledSidebar>
              {!isLoadingFiles && renderFileAndFolders(filesTree)}
              {isLoadingFiles && <SidebarShimmer />}
            </StyledSidebar>
          </Resizable>
          <StyledMain>
            <PlaceholderIcon />
          </StyledMain>
        </Container>
        <GlobalStyles />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
