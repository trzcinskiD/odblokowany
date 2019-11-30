import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Header>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
        <Fecha>
          <b>
            {date.toLocaleDateString("pl-PL", {
              hour: "numeric",
              minute: "numeric",
              day: "numeric",
              month: "2-digit",
              year: "2-digit"
            })}
          </b>
        </Fecha>
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
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const Fecha = styled.span``;

const Excerpt = styled.div`
  & .read-more {
    display: none !important;
  }
`;
