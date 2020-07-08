import React, { useState, useRef } from "react";
import Add from "./Add";
import List from "./List";

const Box = ({ postId }) => {
  const [replyTo, setReplyTo] = useState(0);
  const formRef = useRef(null);

  return (
    <div className="comment" id="comments">
      <h1>Komentarze</h1>
      <List parentId={0} postId={postId} nestLvl={0} replyTo={replyTo} setReplyTo={setReplyTo} formRef={formRef} />
      {replyTo ? null : <Add formRef={formRef} postId={postId} replyTo={replyTo} setReplyTo={setReplyTo} />}
    </div>
  );
};

export default Box;
