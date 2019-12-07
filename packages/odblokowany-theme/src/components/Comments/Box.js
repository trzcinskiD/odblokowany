import React from "react";
import { styled } from "frontity";
import Add from "./Add";
import List from "./List";

const Box = ({ postId }) => {
  return (
    <CommentBox className="comment">
      <h3>Komentarze</h3>
      <List parentId={0} postId={postId} nestLvl={0} />
      <Add postId={postId} />
    </CommentBox>
  );
};

export default Box;

const CommentBox = styled.div`
  display: block;
  margin: 20px 0;
`;
