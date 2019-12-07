import React from "react";
import { styled } from "frontity";
import List from "./List";
import formatDate from "../../util/formatDate";

const Comment = ({ author, date, content, post, id, nestLvl }) => {
  const commentNestLvl = nestLvl + 1;
  return (
    <>
      <Container commentNestLvl={commentNestLvl}>
        <Author>
          <b>{author}</b>
        </Author>
        <Fecha>
          , dodano <b>{formatDate(date)}</b>
        </Fecha>
        <Content
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </Container>
      <List parentId={id} postId={post} nestLvl={commentNestLvl} />
    </>
  );
};

export default Comment;

const Container = styled.div`
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.09);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 10px 0 10px ${({ commentNestLvl }) => 10 * commentNestLvl}px;
  padding: 10px;
`;

const Author = styled.p`
  font-size: 0.8em;
  display: inline;
`;

const Fecha = styled.p`
  font-size: 0.8em;
  display: inline;
`;

const Content = styled.div`
  font-size: 0.9em;
  p {
    margin: 7px 0;
  }
`;
