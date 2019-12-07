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
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap&subset=latin-ext"
          rel="stylesheet"
        ></link>
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
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li {
    font-family: "Open Sans", sans-serif;
  }
  h1 {
    font-size: 41px;
    line-height: 64px;
    margin-bottom: 34px;
  }
  h2 {
    font-size: 32px;
    line-height: 51px;
    margin-top: 55px;
    margin-bottom: 21px;
  }
  h3 {
    font-size: 25px;
    line-height: 41px;
    margin-top: 34px;
    margin-bottom: 13px;
  }
  h4 {
    font-size: 20px;
    line-height: 34px;
    margin-bottom: 8px;
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
  max-width: 696px;
  margin: auto;
  line-height: 34px;
  font-size: 20px;
  padding: 21px;
  & {
    text-align: justify;
  }
`;
