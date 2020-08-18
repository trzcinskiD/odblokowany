import React from "react";
import { connect, styled } from "frontity";
import List from "./List";
import Pagination from "./Pagination";

const SearchResults = ({ state, libraries }) => {
  const currentPath = state.router.link;
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const reverseFormat = (query) => query.replace("+", " ");

  return (
    <Results>
      <div>
        <h1 label="Search">{`Szukałeś “${reverseFormat(searchQuery)}”`}</h1>
        {isEmpty ? <h2>Nic mi się nie kojarzy z wyszukiwaną frazą. Spróbuj ponownie w poniższym formularzu.</h2> : <h2>Liczba znalezionych artykułów: {total}</h2>}
      </div>
      {!isEmpty && <List showExcerpt={false} showMedia={false} articleSize="normal" grid />}
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
