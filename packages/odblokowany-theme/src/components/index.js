import React from "react";
import { Global, css, connect, Head } from "frontity";
import Nav from "./Nav";
import backgroundPattern from "../img/cream_dust.png";

const Theme = ({ state }) => {
  return (
    <>
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="pl" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        ></meta>
      </Head>
      <Global styles={globalStyles} />
      <Nav />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    background-image: url(${backgroundPattern});
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
