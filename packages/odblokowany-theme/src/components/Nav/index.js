import React, { useEffect, useState, useRef } from "react";
import { connect, styled } from "frontity";
import { motion } from "framer-motion";
import { FaSearch, FaBars } from "react-icons/fa";
import Link from "../Link";
import SearchForm from "./SearchForm";

const Nav = ({ state, actions }) => {
  const [isDrawerOpen, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  const openDrawer = () => {
    actions.theme.openSearch();
    toggleDrawer(true);
  };

  const closeDrawer = (event) => {
    if (drawerRef.current && drawerRef.current.contains(event.target)) {
      return;
    }
    toggleDrawer(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Navbar>
      <NavLogo>
        <Link link={"/"}>
          <h3>{state.frontity.title}</h3>
        </Link>
      </NavLogo>
      <NavActionContainer ref={drawerRef} style={{ x: "100%" }} animate={{ x: isDrawerOpen ? 0 : "100%" }}>
        <NavMenu>
          {state.theme.menu.map(([name, link]) => (
            <Link key={name} link={link}>
              <h4>{name}</h4>
            </Link>
          ))}
        </NavMenu>
        <NavSearch>
          <SearchForm isDrawerOpen={isDrawerOpen} />
          <FaSearch onClick={actions.theme.openSearch} />
        </NavSearch>
      </NavActionContainer>
      <NavHamburger>
        <FaBars onClick={openDrawer} />
      </NavHamburger>
    </Navbar>
  );
};

export default connect(Nav);

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  top: 0;
  height: 3.125em;
  z-index: 999;
  position: fixed;
  background-color: white;
  & a {
    padding: 0 1.5em;
    height: -webkit-fill-available;
    display: flex;
    align-items: center;
    & * {
      margin: 0;
    }
  }
  @media (max-width: 767.98px) {
    justify-content: space-between;
  }
`;

const NavLogo = styled.div``;

const NavActionContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-wrap: anywhere;
  width: 100%;
  @media (min-width: 767.98px) {
  transform: none !important;
}
  @media (max-width: 767.98px) {
    position: fixed;
    right: 0;
    top: 0;
    flex-direction: column-reverse;
    width: fit-content;
    background-color: white;
    padding: 1em;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 767.98px) {
    flex-direction: column;
    & a {
      padding: 1em;
    }
  }
`;

const NavSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 0 1.5em;
  @media (max-width: 767.98px) {
    padding: 0;
  }
  .react-icons {
    height: 1.5em;
    width: 1.5em;
    margin-left: 1.5em;
    cursor: pointer;
    @media (max-width: 767.98px) {
      display: none;
    }
  }
  & input {
    @media (max-width: 767.98px) {
      text-align: center;
      transition: all 0.5s ease;
    }
  }
`;

const NavHamburger = styled.div`
  display: none;
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
  @media (max-width: 767.98px) {
    display: flex;
  }
`;
