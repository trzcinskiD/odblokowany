import React from "react";
import { Global, css, connect, Head, styled } from "frontity";
import Nav from "./Nav";
import Post from "./Post";
import List from "./list";
import Loading from "./Loading";
import backgroundPattern from "../img/cream_dust.png";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log(`Data object from theme`, data);
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
      <Main>
        {(data.isFetching && <Loading />) ||
          (data.isArchive && <List />) ||
          (data.isPostType && <Post />)}
      </Main>
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

const Main = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  margin-top: 60px;
  width: 100%;
`;
