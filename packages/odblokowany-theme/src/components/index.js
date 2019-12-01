import React from "react";
import { Global, css, connect, Head, styled } from "frontity";
import Nav from "./Nav";
import Post from "./Post";
import List from "./List";
import Loading from "./Loading";
import Page404 from "./Page404";
import Title from "./Title";
import Footer from "./Footer";
import backgroundPattern from "../img/cream_dust.png";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Title />
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
          (data.isPostType && <Post />) ||
          (data.is404 && <Page404 />)}
      </Main>
      <Footer />
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
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
  flex: 1 0 auto;
  justify-content: center;
  width: 100%;
`;
