import React, { useEffect, useRef, useState } from "react";
import { connect, styled } from "frontity";
import throttle from "lodash.throttle";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import List from "../List";
import FeaturedMedia from "../FeaturedMedia";
import Comments from "../Comments";
import readTime from "../../util/readTime";
import formatDate from "../../util/formatDate";
import ShareButton from "../ShareButton";
import ButtonFont from "../../styles/ButtonFont";
import LinkFont from "../../styles/LinkFont";
import Link from "../Link";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const date = new Date(post.date);
  const { name: categoryName, link: categoryLink } = state.source["category"][post.categories[0]];
  const Html2React = libraries.html2react.Component;
  const contentRef = useRef(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
    if (contentRef.current.getBoundingClientRect().height < window.innerHeight) {
      setShowComments(true);
    }
    window.addEventListener("scroll", throttleHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > contentRef.current.getBoundingClientRect().height / 2) {
      setShowComments(true);
      window.removeEventListener("scroll", throttleHandleScroll);
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 200);

  return data.isReady ? (
    <Container>
      <Header>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      </Header>
      <InfoSection>
        <Info>
          <FaCalendarAlt />
          <ButtonFont>{formatDate(date, "long")}</ButtonFont>
        </Info>
        <Info>
          <FaStopwatch />
          <ButtonFont>Przeczytasz w {readTime(post.content.rendered)}</ButtonFont>
        </Info>
      </InfoSection>
      <FeaturedMedia id={post.featured_media} clickable={false} height={480} fullWidth={true} />
      <Content ref={contentRef}>
        <Html2React html={post.content.rendered} />
      </Content>
      <Footer>
        <div>
          <Link link={"/"}>
            <LinkFont>Strona główna</LinkFont>
          </Link>
        </div>
        <div>
          <ShareButton shareUrl={post.link} size={1.5} />
        </div>
        <div>
          <Link link={categoryLink}>
            <LinkFont>{categoryName}</LinkFont>
          </Link>
        </div>
      </Footer>
      {data.isPost && showComments && <Comments postId={post.id} />}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  max-width: 75em;
  margin: 2em auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  & h1 {
    margin: 0;
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
const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1em 0;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 57em;
  & a {
    background-color: var(--lightSpecial);
  }
  & li {
    margin-bottom: 1em;
  }
  iframe {
    display: block;
    margin: auto;
  }
  blockquote {
    margin: 1em 0;
    border-left: 0.25em solid var(--special);
    padding: 0.25em 1em;
    font-style: italic;
  }
  .Callout {
    border: 0.15em solid var(--special);
    padding: 1em;
    border-radius: 0.5em;
    font-weight: bold;
  }
  .wp-block-table {
    margin: 0;
    & table {
      border-collapse: collapse;
    }
    & td {
      padding: 0.5em;
      border: 1px solid var(--border);
    }
  }
  .wp-block-image {
    margin: 1.563em 0 5em 0;
    display: inline;
    & img {
      position: static;
      max-width: 100% !important;
    }
    &.alignfull {
      width: 100%;
      img {
        width: 100% !important;
      }
    }
    .aligncenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2em;
    }
    .alignright {
      max-width: 40% !important;
      float: right;
      margin-right: 10vw;
      margin-left: 3.125em;
    }
    .alignleft {
      max-width: 35% !important;
      float: left;
      margin-left: 5vw;
      z-index: 50;
    }
    figcaption {
      font-size: 0.9em;
      text-align: center;
      max-width: 50%;
      margin: 1.563em auto 0 auto;
      color: var(--lightText);
    }
    figure {
      span.is-resized {
        height: unset !important;
        width: unset !important;
      }
      & span {
        padding-bottom: unset;
      }
    }
  }
`;

const Footer = styled.div`
  display: flex;
  margin: 2em 4em;
  & > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  & div:first-of-type > * {
    margin-right: auto;
  }
  & div:last-child > * {
    margin-left: auto;
  }
`;
