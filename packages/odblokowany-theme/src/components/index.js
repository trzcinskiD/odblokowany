import React from "react";
import { Global, connect, Head, styled } from "frontity";
import globalStyles from "../styles/globalStyles";
import Nav from "./Nav";
import Post from "./Post";
import List from "./List";
import Loading from "./Loading";
import Page404 from "./Page404";
import Title from "./Title";
import Footer from "./Footer";
import SearchModal from "./Search/SearchModal";
import SearchResults from "./Search/SearchResults";
import Share from "./Share";

const Theme = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const parse = libraries.source.parse(state.router.link);
  const isSearch = Boolean(parse.query["s"]);
  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="pl" />
      </Head>
      <Global styles={globalStyles} />
      <Nav />
      <SearchModal />
      <Share />
      <Main>
        {(data.isFetching && <Loading />) ||
          (isSearch && <SearchResults />) ||
          (data.isArchive && <List showExcerpt={true} showMedia={true} />) ||
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
  justify-content: center;
`;
