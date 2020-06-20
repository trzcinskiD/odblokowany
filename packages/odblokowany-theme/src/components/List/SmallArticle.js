import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../Featured-media";
import LinkFont from "../../styles/LinkFont";

const SmallArticle = ({ state, articleData }) => {
  const { name: categoryName, link: categoryLink } = state.source["category"][articleData.categories[0]];

  return (
    <Article>
      <Header>
        <Link link={articleData.link}>
          <h4 dangerouslySetInnerHTML={{ __html: articleData.title.rendered }} />
        </Link>
      </Header>
      <Link link={articleData.link}>
        <FeaturedMedia id={articleData.featured_media} clickable={true} height={163} />
      </Link>
      <Footer>
        <div>
          <Link link={articleData.link}>
            <LinkFont size="small">Kontynuuj czytanie</LinkFont>
          </Link>
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

export default connect(SmallArticle);

const Article = styled.article`
  width: 362px;
`;

const Header = styled.div`
  display: flex;
  margin: 0.5em 0;
  & h4 {
    margin: 0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5em 0;
`;
