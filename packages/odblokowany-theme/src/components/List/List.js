import React from "react";
import { connect } from "frontity";
import BigArticle from "./BigArticle";
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
        const articleData = state.source[type][id];
        return <BigArticle key={articleData.id} articleData={articleData} showExcerpt={showExcerpt} showMedia={showMedia} />;
      })}
      <Pagination />
    </section>
  );
};

export default connect(List);
