import React from "react";
import { connect, styled } from "frontity";
import { IconContext } from "react-icons";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";
import readTime from "../../util/readTime";
import formatDate from "../../util/formatDate";

const Item = ({ item, showExcerpt, showMedia }) => {
  const date = new Date(item.date);

  return (
    <article>
      <Header>
        <Link link={item.link}>
          <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <PostInfo>
            <FaCalendarAlt />
            <DateInfo>{formatDate(date, "long")}</DateInfo>
          </PostInfo>
          <PostInfo>
            <FaStopwatch />
            <h5>Przeczytasz w {readTime(item.content.rendered)}</h5>
          </PostInfo>
        </IconContext.Provider>
      </Header>
      {showMedia && <FeaturedMedia id={item.featured_media} />}
      {item.excerpt && showExcerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

export default connect(Item);

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h5 {
    font-size: 82%;
    margin: 0;
  }
  .react-icons {
    color: var(--light-text);
  }
`;

const Excerpt = styled.div`
  & .read-more {
    display: none !important;
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  & h5 {
    margin-left: 0.5rem;
    font-size: 0.75em;
  }
`;

const DateInfo = styled.h5`
  text-transform: capitalize;
`;
