import React from "react";
import { Global, connect, Head, styled } from "frontity";
import { IconContext } from "react-icons";
import globalStyles from "../styles/globalStyles";
import Nav from "./Nav";
import Post from "./Post";
import List from "./List";
import Loading from "./Loading";
import Page404 from "./Page404";
import Title from "./Title";
import SearchResults from "./SearchResults";
import Sidebar from "./Sidebar";
import CategoryResults from "./CategoryResults";

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
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Nav />
        <Main>
          {(data.isFetching && <Loading />) ||
            (isSearch && <SearchResults />) ||
            (data.isTaxonomy && <CategoryResults />) ||
            (data.isArchive && (
              <>
                <List />
                <Sidebar />
              </>
            )) ||
            (data.isPostType && <Post />) ||
            (data.is404 && <Page404 />)}
        </Main>
      </IconContext.Provider>
    </>
  );
};

export default connect(Theme);

const Main = styled.div`
  display: flex;
  flex: 1 0 auto;
  width: 1440px;
  margin: 3em auto;
  padding: 0 1.25em;
  font-size: 16px;
  justify-content: space-between;
  @media only screen and (max-width: 376px) {
    margin: 0;
  }
  .react-icons {
    color: var(--lightText);
  }
  .react-icons:hover {
    color: var(--text);
  }
`;
