import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";
import readTime from "../../util/readTime";

const Item = ({ item }) => {
  const date = new Date(item.date);

  return (
    <article>
      <Header>
        <Link link={item.link}>
          <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
        <Info>
          <p>
            {date.toLocaleDateString("pl-PL", {
              hour: "numeric",
              minute: "numeric",
              day: "numeric",
              month: "2-digit",
              year: "2-digit"
            })}
          </p>
          <p>Przeczytasz w {readTime(item.content.rendered)}</p>
        </Info>
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

const Info = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & p {
    margin: 0;
    font-size: 82%;
  }
`;

const Excerpt = styled.div`
  & .read-more {
    display: none !important;
  }
`;

const Title = styled.h1``;
