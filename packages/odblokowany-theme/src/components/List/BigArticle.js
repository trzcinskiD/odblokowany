import React from "react";
import { connect, styled } from "frontity";
import { IconContext } from "react-icons";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";
import readTime from "../../util/readTime";
import formatDate from "../../util/formatDate";
import ButtonFont from "../../styles/ButtonFont";
import LinkFont from "../../styles/LinkFont";
import ShareButton from "../ShareButton";

const BigArticle = ({ state, articleData, showExcerpt, showMedia }) => {
  const date = new Date(articleData.date);
  const { name: categoryName, link: categoryLink } = state.source["category"][articleData.categories[0]];

  return (
    <article>
      <Header>
        <Link link={articleData.link}>
          <h1 dangerouslySetInnerHTML={{ __html: articleData.title.rendered }} />
        </Link>
      </Header>
      <InfoSection>
        <IconContext.Provider value={{ className: "react-icons" }}>
          <Info>
            <FaCalendarAlt />
            <ButtonFont>{formatDate(date, "long")}</ButtonFont>
          </Info>
          <Info>
            <FaStopwatch />
            <ButtonFont>Przeczytasz w {readTime(articleData.content.rendered)}</ButtonFont>
          </Info>
        </IconContext.Provider>
      </InfoSection>
      {showMedia && (
        <Link link={articleData.link}>
          <FeaturedMedia id={articleData.featured_media} clickable={true} />
        </Link>
      )}
      {articleData.excerpt && showExcerpt && <Excerpt dangerouslySetInnerHTML={{ __html: articleData.excerpt.rendered }} />}
      <Footer>
        <div>
          <Link link={articleData.link}>
            <LinkFont>Kontynuuj czytanie</LinkFont>
          </Link>
        </div>
        <div>
          <ShareButton shareUrl={articleData.link} size={1.5} />
        </div>
        <div>
          <Link link={categoryLink}>
            <LinkFont>{categoryName}</LinkFont>
          </Link>
        </div>
      </Footer>
    </article>
  );
};

export default connect(BigArticle);

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  & h1 {
    margin: 0;
  }
`;

const Excerpt = styled.div`
  margin: 1em 0;
  text-align: center;
  & .read-more {
    display: none !important;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1em 0;
  .react-icons {
    color: var(--lightText);
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 0.5em;
  & span {
    margin-left: 0.5em;
  }
`;

const Footer = styled.div`
  display: flex;
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & div:first-child > * {
    margin-right: auto;
  }
  & div:last-child > * {
    margin-left: auto;
  }
`;
