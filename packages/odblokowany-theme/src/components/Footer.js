import React from "react";
import { styled, connect } from "frontity";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaEnvelope
} from "react-icons/fa";

const Footer = ({ state }) => {
  return (
    <Container>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <a href={state.frontity.social.facebook} aria-label="Facebook">
          <FaFacebookSquare />
        </a>
        <a href={state.frontity.social.linkedIn} aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a
          href={`mailto:${state.frontity.social.mail}?subject=%5Bodblokowany.com%5D`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a href={state.frontity.social.gitHub} aria-label="Github">
          <FaGithub />
        </a>
        <a href={state.frontity.social.gitLab} aria-label="Gitlab">
          <FaGitlab />
        </a>
      </IconContext.Provider>
    </Container>
  );
};

export default connect(Footer);

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: var(--bg);
  flex-shrink: 0;
  & a {
    padding: 0.5em 1em;
    transition: box-shadow 0.3s ease;
    &:hover {
      box-shadow: var(--shadow) 0 0 4px 0;
    }
  }
  .react-icons {
    vertical-align: middle;
    height: 1.5em;
    width: 1.5em;
  }
`;
