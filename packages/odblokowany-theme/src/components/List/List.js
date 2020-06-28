import React from "react";
import { connect, styled } from "frontity";
import BigArticle from "./BigArticle";
import NormalArticle from "./NormalArticle";
import SmallArticle from "./SmallArticle";

const List = ({ state, articleSize, grid = false, maxCount = 0 }) => {
  const data = state.source.get(state.router.link);
  const items = maxCount ? data.items.slice(0, maxCount) : data.items;
  return (
    <ArticleList grid={grid}>
      {items.map(({ type, id }) => {
        const articleData = state.source[type][id];
        switch (articleSize) {
          case "small":
            return <SmallArticle key={articleData.id} articleData={articleData} />;
          case "normal":
            return <NormalArticle key={articleData.id} articleData={articleData} />;
          case "big":
          default:
            return <BigArticle key={articleData.id} articleData={articleData} />;
        }
      })}
    </ArticleList>
  );
};

export default connect(List);

const ArticleList = styled.section`
  ${({ grid }) => {
    if (grid) {
      return `display: flex; margin: -0.750em; & article { flex: 1 1 0px; margin: 0.750em; align-self: flex-end }`;
    } else {
      return `flex: 3 1 0;
      display: flex;
      flex-direction: column;`;
    }
  }}
`;
