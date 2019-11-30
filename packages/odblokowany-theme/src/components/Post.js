import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import List from "./list";
// import FeaturedMedia from "./featured-media";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const date = new Date(post.date);

  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <Container>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
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
        )}
      </div>
      {/*state.theme.featured.showOnPost && (
        <FeaturedMedia id={post.featured_media} />
      )*/}
      <Content>
        <Html2React html={post.content.rendered} />
      </Content>
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;

const Title = styled.h1``;

const StyledLink = styled(Link)``;

const Author = styled.p``;

const Fecha = styled.p``;

const Content = styled.div``;
