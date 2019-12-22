import React from "react";
import { connect, styled } from "frontity";
import List from "../List";
import SearchForm from "./SearchForm";

const SearchResults = ({ state, libraries }) => {
  // Get the current path or link
  const currentPath = state.router.link;

  // Get the total pages that match the current path/url
  const { total } = state.source.data[currentPath];
  const isEmpty = total === 0;

  // Parse to current url to get the search query
  const parse = libraries.source.parse(state.router.link);

  // Parse returns an object whose query string is stored in "s"
  const searchQuery = parse.query["s"];

  // Since we formatted the query string in the search modal, let's reverse the formatting
  const reverseFormat = query => query.replace("+", " ");

  return (
    <>
      <h2 label="Search">
        <span>{`“${reverseFormat(searchQuery)}”`}</span>
        <div>
          {isEmpty ? (
            <Text>
              We could not find any results for your search. You can give it
              another try through the search form below.
            </Text>
          ) : (
            <Text>
              We found {total} {total === 1 ? "result" : "results"} for your
              search.
            </Text>
          )}
        </div>
      </h2>

      {isEmpty ? (
        <div>
          <SearchForm />
        </div>
      ) : (
        <List showExcerpt={true} showMedia={false} />
      )}
    </>
  );
};

export default connect(SearchResults);

const Text = styled.p`
  margin: 0 0 1em 0;
  &:last-child {
    margin-bottom: 0;
  }
`;
