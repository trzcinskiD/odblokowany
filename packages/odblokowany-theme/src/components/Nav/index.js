import React from "react";
import { connect, styled } from "frontity";
import { FaSearch } from "react-icons/fa";
import Link from "../Link";
import SearchForm from "./SearchForm";

const Nav = ({ state, actions }) => {
  return (
    <StyledNav>
      <NavMenuContainer>
        <Link link={"/"}>
          <h3>{state.frontity.title}</h3>
        </Link>
        {state.theme.menu.map(([name, link]) => (
          <Link key={name} link={link}>
            <h4>{name}</h4>
          </Link>
        ))}
      </NavMenuContainer>
      <NavSearchContainer>
        <SearchForm />
        <FaSearch onClick={actions.theme.openSearch} />
      </NavSearchContainer>
    </StyledNav>
  );
};

export default connect(Nav);

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  top: 0;
  height: 3.125em;
  z-index: 999;
  position: fixed;
  background-color: white;
`;

const NavMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  & a {
    padding: 0 1.5em;
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    & * {
      margin: 0;
    }
  }
`;

const NavSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0 1.5em;
  .react-icons {
    height: 1.5em;
    width: 1.5em;
    margin-left: 1.5em;
    cursor: pointer;
  }
`;
