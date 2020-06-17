import React from "react";
import { styled, connect } from "frontity";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaGitlab,
  FaEnvelope,
} from "react-icons/fa";

const Footer = ({ state }) => {
  return (
    <Container>
      <Icons>
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
      </Icons>
      <FooterText>&copy; odblokowany</FooterText>
    </Container>
  );
};

export default connect(Footer);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin: 1.5em;
  & a {
    background-image: none;
  }
  .react-icons {
    vertical-align: middle;
    height: 1.5em;
    width: 1.5em;
    margin: 0 0.75em;
  }
`;

const FooterText = styled.div`
  align-self: center;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    Helvetica, sans-serif;
  font-size: 0.75em;
  line-height: 0.938em;
  letter-spacing: 0.15em;
  font-style: normal;
  font-weight: bold;
  text-transform: uppercase;
`;
