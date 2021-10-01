import { FC, useState } from "react";
import styled from "styled-components";

interface SectionProps {
  title: string;
  inner: boolean;
}

interface HeaderProps {
  inner: boolean;
}

const StyledSection = styled.div`
  transition: all 1s ease-out;

  & .content {
    padding-left: 0.5rem;
    overflow-y: scroll;
  }
`;

const Header = styled.button<HeaderProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.25rem;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: ${(props) => (props.inner ? "normal" : "bold")};
  padding: ${(props) =>
    props.inner ? "0.5rem 1rem 0.5rem 1rem" : "0.5rem 0.5rem 0.5rem 0.5rem"};

  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  svg {
    margin-right: 0.3rem;
    flex-shrink: 0;
  }

  &:hover {
    background-color: whitesmoke;
  }
`;

const Section: FC<SectionProps> = ({ title, children, inner }) => {
  const [isOpen, setIsOpen] = useState(inner ? false : true);
  const toggle = () => setIsOpen((open) => !open);

  return (
    <StyledSection>
      <Header onClick={toggle} inner={inner}>
        <svg
          style={{ transform: `rotate(${isOpen ? "0deg" : "-90deg"})` }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{title && inner ? title : title.toUpperCase()}</span>
      </Header>
      {isOpen && <div className="content">{children}</div>}
    </StyledSection>
  );
};

export default Section;
