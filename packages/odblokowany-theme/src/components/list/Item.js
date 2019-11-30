import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
// import FeaturedMedia from "../featured-media";

const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>
      <div>
        {author && (
          <StyledLink link={author.link}>
            <Author>
              By <b>{author.name}</b>
            </Author>
          </StyledLink>
        )}
        <Fecha>
          on <b>{date.toDateString()}</b>
        </Fecha>
      </div>
      {/* state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      ) */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

export default connect(Item);

const Title = styled.h1``;

const Author = styled.span``;

const StyledLink = styled(Link)``;

const Fecha = styled.span``;

const Excerpt = styled.div``;
