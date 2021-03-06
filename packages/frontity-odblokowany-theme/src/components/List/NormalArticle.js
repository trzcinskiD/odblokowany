import React from "react";
import { connect, styled } from "frontity";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import Link from "../Link";
import FeaturedMedia from "../FeaturedMedia";
import readTime from "../../util/readTime";
import formatDate from "../../util/formatDate";
import ButtonFont from "../../styles/ButtonFont";
import LinkFont from "../../styles/LinkFont";
import ShareButton from "../ShareButton";

const NormalArticle = ({ state, articleData }) => {
  const date = new Date(articleData.date);
  const { name: categoryName, link: categoryLink } = state.source["category"][articleData.categories[0]];

  return (
    <Article>
      <Header>
        <Link link={articleData.link}>
          <h3 dangerouslySetInnerHTML={{ __html: articleData.title.rendered }} />
        </Link>
      </Header>
      <InfoSection>
        <Info>
          <FaCalendarAlt />
          <ButtonFont size="small">{formatDate(date, "long")}</ButtonFont>
        </Info>
        <Info>
          <FaStopwatch />
          <ButtonFont size="small">Przeczytasz w {readTime(articleData.content.rendered)}</ButtonFont>
        </Info>
      </InfoSection>
      <Link link={articleData.link}>
        <FeaturedMedia id={articleData.featured_media} clickable={true} height={176} />
      </Link>
      <Footer>
        <div>
          <Link link={articleData.link}>
            <LinkFont size="small">Kontynuuj czytanie</LinkFont>
          </Link>
        </div>
        <div>
          <ShareButton shareUrl={articleData.link} size={0.85} />
        </div>
        <div>
          <Link link={categoryLink}>
            <LinkFont size="small">{categoryName}</LinkFont>
          </Link>
        </div>
      </Footer>
    </Article>
  );
};

export default connect(NormalArticle);

const Article = styled.article`
  max-width: 444px;
`;

const Header = styled.div`
  display: flex;
  padding: 0 0.5em;
  & h3 {
    margin: 0;
  }
  @media (max-width: 767.98px) {
    justify-content: center;
    text-align: center;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5em 0;
  .react-icons {
    font-size: 0.85em;
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 0.5em;
  & span {
    margin-left: 0.5em;
  }
  @media (max-width: 767.98px) {
    margin-bottom: 0.5em;
  }
`;

const Footer = styled.div`
  display: flex;
  margin: 0.5em 0;
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    & span {
      vertical-align: top;
    }
  }
  & div:first-of-type > * {
    margin-left: 0.5em;
    margin-right: auto;
  }
  & div:last-child > * {
    margin-right: 0.5em;
    margin-left: auto;
    @media (max-width: 767.98px) {
      margin-top: 0.5em;
    }
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: center;
  }
`;
