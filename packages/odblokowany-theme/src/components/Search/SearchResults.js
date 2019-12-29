import React from "react";
import { connect, styled } from "frontity";
import List from "../List";
import SearchForm from "./SearchForm";

const SearchResults = ({ state, libraries }) => {
  const currentPath = state.router.link;
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  const parse = libraries.source.parse(state.router.link);
  const searchQuery = parse.query["s"];

  const reverseFormat = query => query.replace("+", " ");

  return (
    <Results>
      <div>
        <Text label="Search">{`Szukałeś “${reverseFormat(searchQuery)}”`}</Text>
        {isEmpty ? (
          <Text>
            Nic mi się nie kojarzy z wyszukiwaną frazą. Spróbuj ponownie w
            poniższym formularzu.
          </Text>
        ) : (
          <Text>Liczba znalezionych artykułów: {total}</Text>
        )}
      </div>

      {isEmpty ? (
        <div>
          <SearchForm />
        </div>
      ) : (
        <List showExcerpt={false} showMedia={false} />
      )}
    </Results>
  );
};

export default connect(SearchResults);

const Results = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.h3`
  text-align: center;
  margin: 0.5em;
`;
