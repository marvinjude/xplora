import styled from "styled-components";
import getIconURL from "../utils/getIconURL";
import ImageLoader from "./ImageLoader";

const StyledFile = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  img {
    width: 1rem;
    height: 1rem;
    margin-right: 10px;
  }

  &:hover {
    background-color: whitesmoke;
  }
`;

const File = ({ name, extension }) => {
  const icon = getIconURL(extension);
  return (
    <StyledFile>
      <ImageLoader
        src={icon}
        fallbackSrc="https://codesandbox.io/static/media/file.6cbc0ce8.svg"
        alt={extension}
      />
      {name}
    </StyledFile>
  );
};

export default File;
