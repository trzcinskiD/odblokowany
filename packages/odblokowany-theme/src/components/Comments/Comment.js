import React from "react";
import { styled } from "frontity";
import List from "./List";
import Add from "./Add";
import formatDate from "../../util/formatDate";

const Comment = ({
  id,
  post,
  avatar,
  author,
  date,
  content,
  nestLvl,
  replyTo,
  setReplyTo,
  formRef
}) => {
  const commentNestLvl = nestLvl === 5 ? nestLvl : nestLvl + 1;
  return (
    <>
      <Container commentNestLvl={commentNestLvl}>
        <img alt="avatar" src={avatar[24]} />
        <Author>
          <b>{author}</b>
        </Author>
        <Fecha>
          <br />
          <b>{formatDate(date)}</b>
        </Fecha>
        <Content
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
        <button onClick={() => setReplyTo(id)}>Odpowiedz</button>
      </Container>
      {replyTo === id ? (
        <Add
          formRef={formRef}
          postId={post}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
        />
      ) : null}
      <List
        parentId={id}
        postId={post}
        nestLvl={commentNestLvl}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
      />
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
  margin: 10px 0 10px
    ${({ commentNestLvl }) => (commentNestLvl === 1 ? 0 : 5 * commentNestLvl)}px;
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
