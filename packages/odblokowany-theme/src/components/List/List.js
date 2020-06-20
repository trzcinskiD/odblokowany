import React from "react";
import { connect } from "frontity";
import BigArticle from "./BigArticle";
import NormalArticle from "./NormalArticle";
import SmallArticle from "./SmallArticle";
import Pagination from "./Pagination";

const List = ({ state, showMedia, articleSize }) => {
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
        switch (articleSize) {
          case "normal":
            return <NormalArticle key={articleData.id} articleData={articleData} />;
          case "big":
          default:
            return <BigArticle key={articleData.id} articleData={articleData} />;
        }
      })}
      <Pagination />
    </section>
  );
};

export default connect(List);
