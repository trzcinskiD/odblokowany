import React, { useRef, useState, useEffect } from "react";
import { connect, styled, css } from "frontity";
import throttle from "lodash.throttle";
import Link from "./Link";
import logoImg from "../img/logo.png";

const Nav = ({ state }) => {
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
      <StyledUl>
        {state.theme.menu.map(([name, link]) => (
          <Link key={name} link={link}>
            <StyledLi isSelected={state.router.link === link}>
              {name === "logo" ? (
                <img
                  src={logoImg}
                  css={css`
                    position: relative;
                    bottom: 4px;
                  `}
                />
              ) : (
                name
              )}
            </StyledLi>
          </Link>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default connect(Nav);

const StyledNav = styled.nav`
  width: 100%;
  top: 0;
  z-index: 999;
  padding: 0px 20px;
  box-shadow: rgba(0, 0, 0, 0.208) -1px 1px 23px 4px;
  background: #fff;
  ${({ stickNav }) => (stickNav ? "position: fixed;" : null)}
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-width: 980px;
  margin: auto;
  padding: 0px;
  list-style: none;
`;

const StyledLi = styled.li`
  opacity: 1;
  height: 50px;
  text-align: center;
  font-weight: 500;
  padding: 13px 30px;
  transition: box-shadow 0.3s ease;
  border-bottom: 1px solid
    ${({ isSelected }) => (isSelected ? "#000" : "transparent")};
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.416) 0px 0px 10px 0px;
  }
`;
