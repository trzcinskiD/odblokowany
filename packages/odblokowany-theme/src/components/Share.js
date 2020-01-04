import React from "react";
import { styled } from "frontity";
import useScript from "./hooks/useScript.js";

const Share = () => {
  useScript("https://static.addtoany.com/menu/page.js");
  return (
    <Container className="a2a_kit a2a_kit_size_32 a2a_default_style">
      <a className="a2a_button_pocket" />
      <a className="a2a_button_facebook" />
      <a className="a2a_button_linkedin" />
      <a className="a2a_dd" href="https://www.addtoany.com/share" />
    </Container>
  );
};

export default Share;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  justify-content: center;
  a {
    margin: 0.2em;
  }
`;
