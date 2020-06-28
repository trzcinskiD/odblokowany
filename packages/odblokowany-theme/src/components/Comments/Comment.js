import React from "react";
import { styled } from "frontity";
import { FaCalendarAlt } from "react-icons/fa";
import List from "./List";
import Add from "./Add";
import formatDate from "../../util/formatDate";

const Comment = ({ id, post, avatar, author, date, content, nestLvl, replyTo, setReplyTo, formRef }) => {
  const commentNestLvl = nestLvl === 5 ? nestLvl : nestLvl + 1;
  return (
    <>
      <Container commentNestLvl={commentNestLvl}>
        <div>
          <Avatar alt="avatar" src={avatar[96]} />
        </div>
        <div>
          <Author>{author}</Author>
          <PostInfo>
            <FaCalendarAlt />
            <h5>{formatDate(date)}</h5>
          </PostInfo>
          <Content
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
          <button onClick={() => setReplyTo(id)}>Odpowiedz</button>
        </div>
      </Container>
      {replyTo === id ? <Add formRef={formRef} postId={post} replyTo={replyTo} setReplyTo={setReplyTo} /> : null}
      <List parentId={id} postId={post} nestLvl={commentNestLvl} replyTo={replyTo} setReplyTo={setReplyTo} />
    </>
  );
};

export default Comment;

const Container = styled.div`
  display: flex;
  margin: 1rem 0 1rem ${({ commentNestLvl }) => (commentNestLvl === 1 ? 0 : 1.625 * commentNestLvl)}rem;
`;

const Author = styled.h4`
  margin: 0;
`;

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  & h5 {
    margin: 0 0 0 0.5rem;
    font-size: 75%;
  }
  .react-icons {
    height: 0.75em;
    width: 0.75em;
  }
`;

const Content = styled.div`
  font-size: 0.9em;
  p {
    margin: 7px 0;
  }
`;

const Avatar = styled.img`
  border-radius: 100%;
  height: calc(2.25 * 1rem);
  width: calc(2.25 * 1rem);
  margin: 1rem 1rem 0 0;
`;
