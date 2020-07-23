import React, { useEffect, useState, useRef } from "react";
import { connect, styled } from "frontity";
import { motion } from "framer-motion";
import { FaSearch, FaBars, FaMoon, FaSun } from "react-icons/fa";
import Link from "../Link";
import SearchForm from "./SearchForm";

const Nav = ({ state, actions }) => {
  const { isDrawerOpen, mode, setLightMode, setDarkMode } = state.theme;
  const { openSearch, toggleDrawer } = actions.theme;
  const drawerRef = useRef(null);

  const openDrawer = () => {
    openSearch();
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
      <div>
        <Link link={"/"}>
          <h3>{state.frontity.title}</h3>
        </Link>
      </div>
      <NavActionContainer ref={drawerRef} style={{ x: "100%" }} animate={{ x: isDrawerOpen ? 0 : "100%" }}>
        <NavMenu>
          {state.theme.menu.map(([name, link]) => (
            <Link key={name} link={link}>
              <h4>{name}</h4>
            </Link>
          ))}
        </NavMenu>
        <NavSearch>
          <SearchForm />
          <FaSearch onClick={openSearch} />
          {mode === "dark" ? <FaSun onClick={setLightMode} /> : <FaMoon onClick={setDarkMode} />}
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
  background-color: var(--white);
  transition: background-color 500ms;
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
  .react-icons {
    height: 1.5em;
    width: 1.5em;
    margin-left: 1.5em;
    cursor: pointer;
  }
  .react-icons:hover {
    color: var(--special);
  }
`;

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
    background-color: var(--white);
    padding: 1em;
    height: 100%;
    justify-content: flex-end;
    border-left: 1px solid var(--border);
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
    svg:first-of-type {
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
