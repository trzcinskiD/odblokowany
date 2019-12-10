import React, { useState, useRef } from "react";
import { styled } from "frontity";
import Add from "./Add";
import List from "./List";

const Box = ({ postId }) => {
  const [replyTo, setReplyTo] = useState(0);
  const formRef = useRef(null);

  return (
    <CommentBox className="comment">
      <h3>Komentarze</h3>
      <List
        parentId={0}
        postId={postId}
        nestLvl={0}
        replyTo={replyTo}
        setReplyTo={setReplyTo}
        formRef={formRef}
      />
      {replyTo ? null : (
        <Add
          formRef={formRef}
          postId={postId}
          replyTo={replyTo}
          setReplyTo={setReplyTo}
        />
      )}
    </CommentBox>
  );
};

export default Box;

const CommentBox = styled.div`
  display: block;
  margin: 20px 0;
`;
