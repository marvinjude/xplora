import { useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";

const Resizer = styled.div`
  width: 2px;
  height: 100%;

  position: absolute;
  right: 0;

  cursor: col-resize;
  resize: horizontal;

  &:hover,
  &:active {
    background: #c1c3c5b4;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const StyledResizable = styled.div`
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  min-width: 100px;
  display: flex;
  flex-direction: row;
  height: 100vh;
  z-index: 10;
  overflow: scroll;
`;

function Resizable({ children, ...props }) {
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback(() => {
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return (
    <StyledResizable
      {...props}
      ref={sidebarRef}
      style={{ width: sidebarWidth }}
      onMouseDown={(e) => e.preventDefault()}
    >
      <Content>{children}</Content>
      <Resizer onMouseDown={startResizing} />
    </StyledResizable>
  );
}

export default Resizable;
