import React from "react";
import { Head, connect } from "frontity";

const Title = ({ state }) => {
  const data = state.source.get(state.router.link);
  let title = state.frontity.title;

  if (data.isTaxonomy) {
    const { taxonomy, name } = state.source[data.taxonomy][data.id];
    const taxonomyCapitalized =
      taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
    title = `${taxonomyCapitalized}: ${name} - ${state.frontity.title}`;
  } else if (data.isAuthor) {
    const { name } = state.source.author[data.id];
    title = `Author: ${name} - ${state.frontity.title}`;
  } else if (data.isPostType) {
    const postTitle = state.source[data.type][data.id].title.rendered;
    const cleanTitle = postTitle.replace(/<\/?[^>]+(>|$)/g, "");
    title = `${cleanTitle} - ${state.frontity.title}`;
  } else if (data.is404) {
    title = `Nie ma takiej strony - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
