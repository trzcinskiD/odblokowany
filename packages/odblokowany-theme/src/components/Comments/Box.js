import React, { useState, useRef } from "react";
import { styled } from "frontity";
import Add from "./Add";
import List from "./List";

const Box = ({ postId }) => {
  const [replyTo, setReplyTo] = useState(0);
  const FormRef = useRef(null);

  const setFormToReply = id => {
    setReplyTo(id);
    if (id) {
      FormRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  };

  return (
    <CommentBox className="comment">
      <h3>Komentarze</h3>
      <List
        parentId={0}
        postId={postId}
        nestLvl={0}
        setReplyTo={setFormToReply}
      />
      <Add
        formRef={FormRef}
        postId={postId}
        replyTo={replyTo}
        setReplyTo={setFormToReply}
      />
    </CommentBox>
  );
};

export default Box;

const CommentBox = styled.div`
  display: block;
  margin: 20px 0;
`;
