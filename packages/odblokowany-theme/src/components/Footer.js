import React from "react";
import { styled, connect } from "frontity";
import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaGitlab
} from "react-icons/fa";

const Footer = ({ state }) => {
  return (
    <Container>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <a href={state.frontity.social.facebook}>
          <FaFacebookSquare />
        </a>
        <a href={state.frontity.social.linkedIn}>
          <FaLinkedin />
        </a>
        <a href={state.frontity.social.gitHub}>
          <FaGithub />
        </a>
        <a href={state.frontity.social.gitLab}>
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
  background: #fff;
  flex-shrink: 0;
  & a {
    padding: 0.5em 1em;
  }
  .react-icons {
    vertical-align: middle;
    height: 2em;
    width: 2em;
  }
`;
