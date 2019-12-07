import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";
import readTime from "../../util/readTime";
import formatDate from "../../util/formatDate";

const Item = ({ item }) => {
  const date = new Date(item.date);

  return (
    <article>
      <Header>
        <Link link={item.link}>
          <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
        <h5>{formatDate(date)}</h5>
        <h5>Przeczytasz w {readTime(item.content.rendered)}</h5>
      </Header>
      <FeaturedMedia id={item.featured_media} />
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

export default connect(Item);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  & h5 {
    font-size: 82%;
    margin: 0;
  }
`;

const Excerpt = styled.div`
  & .read-more {
    display: none !important;
  }
`;
