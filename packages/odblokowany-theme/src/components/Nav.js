import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";

const Nav = ({ state }) => {
  return (
    <StyledNav>
      <StyledUl>
        {state.theme.menu.map(([name, link]) => (
          <StyledLi key={name} isSelected={state.router.link === link}>
            <Link link={link}>{name}</Link>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default connect(Nav);

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 999;
  padding: 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.208) -1px 1px 23px 4px;
  background: none;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0px;
  list-style: none;
`;

const StyledLi = styled.li`
  opacity: 1;
  flex-grow: 1;
  height: 60px;
  text-align: center;
  font-weight: 500;
  padding: 17px 0px;
  transition: box-shadow 0.3s ease;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? "#000" : "transparent")};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.416) 0px 0px 10px 0px;
  }
`;
