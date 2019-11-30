import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import List from "./List";
import FeaturedMedia from "./Featured-media";

const Post = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const date = new Date(post.date);

  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  return data.isReady ? (
    <Container>
      <Header>
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {data.isPost && (
          <div>
            <Fecha>
              <b>
                {date.toLocaleDateString("pl-PL", {
                  hour: "numeric",
                  minute: "numeric",
                  day: "numeric",
                  month: "2-digit",
                  year: "2-digit"
                })}
              </b>
            </Fecha>
          </div>
        )}
      </Header>
      <FeaturedMedia id={post.featured_media} />
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1``;

const Fecha = styled.p``;

const Content = styled.div``;
