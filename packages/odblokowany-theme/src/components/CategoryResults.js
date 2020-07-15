import React from "react";
import { connect, styled } from "frontity";
import List from "./List";
import Pagination from "./Pagination";

const SearchResults = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <Results>
      <div>
        <h1>Kategoria: {state.source[data.taxonomy][data.id].name}</h1>
      </div>
      <List showExcerpt={false} showMedia={false} articleSize="normal" grid />
      <Pagination />
    </Results>
  );
};

export default connect(SearchResults);

const Results = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2.5em;
  @media (max-width: 767.98px) {
    text-align: center;
  }
`;
