import React, { useEffect, useRef, useState } from "react";
import { connect, styled, loadable } from "frontity";
import List from "./List";
import FeaturedMedia from "./Featured-media";
import readTime from "../util/readTime";
import formatDate from "../util/formatDate";

const Comments = loadable(() => import("./Comments"));

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const date = new Date(post.date);
  const Html2React = libraries.html2react.Component;
  const contentRef = useRef(null);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
    if (
      contentRef.current.getBoundingClientRect().bottom < window.innerHeight
    ) {
      setShowComments(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.pageYOffset > contentRef.current.getBoundingClientRect().bottom
    ) {
      setShowComments(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  return data.isReady ? (
    <Container>
      <Header>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <Info>
          {data.isPost && (
            <>
              <p>{formatDate(date)}</p>
              <p>Przeczytasz w {readTime(post.content.rendered)}</p>
            </>
          )}
        </Info>
      </Header>
      <FeaturedMedia id={post.featured_media} />
      <div ref={contentRef}>
        <Html2React html={post.content.rendered} />
      </div>
      {data.isPost && showComments && <Comments postId={post.id} />}
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

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
  }
`;
