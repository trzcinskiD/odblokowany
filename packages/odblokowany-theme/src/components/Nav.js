import React, { useRef, useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import throttle from "lodash.throttle";
import { IconContext } from "react-icons";
import { FaSearch } from "react-icons/fa";
import Link from "./Link";
import logoImg from "../img/logo.png";

const Nav = ({ state, actions }) => {
  const navRef = useRef(null);
  const [stickNav, setStickNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", throttleHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.pageYOffset >=
      navRef.current.getBoundingClientRect().height * 1.5
    ) {
      setStickNav(true);
    } else {
      setStickNav(false);
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 100);

  return (
    <StyledNav ref={navRef} stickNav={stickNav}>
      <NavButtonContainer>
        <Link link={"/"}>
          <NavButton isSelected={state.router.link === "/"}>
            <img
              src={logoImg}
              alt="logo"
              css={css`
                position: relative;
                bottom: 4px;
              `}
            />
          </NavButton>
        </Link>
        {state.theme.menu.map(([name, link]) => (
          <Link key={name} link={link}>
            <NavButton isSelected={state.router.link === link}>
              {name}
            </NavButton>
          </Link>
        ))}
        <NavButton onClick={actions.theme.openSearchModal}>
          <IconContext.Provider value={{ className: "react-icons" }}>
            <FaSearch />
          </IconContext.Provider>
        </NavButton>
      </NavButtonContainer>
    </StyledNav>
  );
};

export default connect(Nav);

const StyledNav = styled.nav`
  width: 100%;
  top: 0;
  z-index: 999;
  padding: 0 20px;
  box-shadow: var(--shadow) -1px 1px 23px 4px;
  background: var(--bg);
  ${({ stickNav }) => (stickNav ? "position: fixed;" : null)}
`;

const NavButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0;
  list-style: none;
  & a {
    text-decoration: none;
  }
`;

const NavButton = styled.div`
  opacity: 1;
  height: 50px;
  text-align: center;
  font-weight: 700;
  padding: 13px 30px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? "var(--text-color)" : "transparent")};
  &:hover {
    box-shadow: var(--shadow) 0 0 10px 0;
  }
  .react-icons {
    height: 1.5em;
    width: 1.5em;
  }
`;
