import React from "react";
import { connect } from "frontity";
import Item from "./Item";
import Pagination from "./Pagination";

const List = ({ state, showExcerpt, showMedia }) => {
  const data = state.source.get(state.router.link);

  return (
    <section>
      {data.isTaxonomy && (
        <h3>
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </h3>
      )}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return (
          <Item
            key={item.id}
            item={item}
            showExcerpt={showExcerpt}
            showMedia={showMedia}
          />
        );
      })}
      <Pagination />
    </section>
  );
};

export default connect(List);
