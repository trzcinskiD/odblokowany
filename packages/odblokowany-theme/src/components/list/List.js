import React from "react";
import { connect, styled } from "frontity";
import Item from "./Item";
import Pagination from "./Pagination";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </Header>
      )}

      {data.isAuthor && (
        <Header>Author: {state.source.author[data.id].name}</Header>
      )}

      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Header = styled.h3``;
