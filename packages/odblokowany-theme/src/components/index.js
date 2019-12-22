import React from "react";
import { Global, connect, Head, styled } from "frontity";
import globalStyles from "./styles/globalStyles";
import Nav from "./Nav";
import Post from "./Post";
import List from "./List";
import Loading from "./Loading";
import Page404 from "./Page404";
import Title from "./Title";
import Footer from "./Footer";

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
