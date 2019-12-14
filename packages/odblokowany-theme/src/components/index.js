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
  :root {
    --primary: #f0f0f1;
    --darkerPrimary: #e9e8e9;
    --secondary: #c8b272;
    --third: #817c78;
    --dark: #37363a;
  }
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
    color: var(--dark);
    margin: 0;
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundPattern});
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
      Helvetica, Arial, "Lucida Grande", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  nav,
  button,
  label,
  input {
    font-family: "Open Sans", sans-serif;
  }
  h1 {
    font-size: 37px;
    line-height: 58px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 29px;
    line-height: 46px;
    margin-top: 49px;
    margin-bottom: 19px;
  }
  h3 {
    font-size: 23px;
    line-height: 38px;
    margin-top: 30px;
    margin-bottom: 12px;
  }
  h4 {
    font-size: 18px;
    line-height: 30px;
    margin-bottom: 7px;
  }
  h5 {
    color: var(--third);
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  button {
    transition: box-shadow 0.3s ease;
    cursor: pointer;
    border: 0;
    background: white;
    padding: 0.6rem;
    vertical-align: middle;
    text-transform: uppercase;
    font-size: 0.65em;
    font-weight: 600;
    &:hover {
      box-shadow: var(--secondary) 0px 0px 10px 0px;
    }
    &:disabled {
      box-shadow: none;
      cursor: default;
    }
  }
`;

const Main = styled.div`
  display: flex;
  flex: 1 0 auto;
  max-width: 628px;
  margin: auto;
  line-height: 30px;
  font-size: 18px;
  padding: 19px;
  & {
    text-align: justify;
  }
`;
