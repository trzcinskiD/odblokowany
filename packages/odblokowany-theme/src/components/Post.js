import React, { useEffect, useRef, useState } from "react";
import { connect, styled } from "frontity";
import throttle from "lodash.throttle";
import { FaCalendarAlt, FaStopwatch } from "react-icons/fa";
import List from "./List";
import FeaturedMedia from "./Featured-media";
import Comments from "./Comments";
import readTime from "../util/readTime";
import formatDate from "../util/formatDate";

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
    window.addEventListener("scroll", throttleHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (
      window.pageYOffset > contentRef.current.getBoundingClientRect().bottom
    ) {
      setShowComments(true);
      window.removeEventListener("scroll", throttleHandleScroll);
    }
  };

  const throttleHandleScroll = throttle(handleScroll, 200);

  return data.isReady ? (
    <Container>
      <Header>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <>
            <PostInfo>
              <FaCalendarAlt />
              <h5>{formatDate(date)}</h5>
            </PostInfo>
            <PostInfo>
              <FaStopwatch />
              <h5>Przeczytasz w {readTime(post.content.rendered)}</h5>
            </PostInfo>
          </>
        )}
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
  margin: 0;
  & p {
    margin-bottom: 34px;
    text-align: justify;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  & h5 {
    font-size: 82%;
    margin: 0;
  }
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  & h5 {
    margin-left: 0.5rem;
  }
`;
