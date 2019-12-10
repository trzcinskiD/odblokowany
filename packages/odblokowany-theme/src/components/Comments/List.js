import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Loading from "../Loading";
import Comment from "./Comment";

const List = ({
  libraries,
  parentId,
  postId,
  nestLvl,
  setReplyTo,
  replyTo,
  formRef
}) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    libraries.source.api
      .get({
        endpoint: "comments",
        params: { post: postId, parent: parentId, per_page: 100 }
      })
      .then(response => {
        response.json().then(data => {
          setComments(data);
          setLoading(false);
        });
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          {comments.length === 0 && parentId === 0 && <p>Brak komentarzy</p>}
          {comments.length > 0 && (
            <>
              {comments.map(item => {
                const date = new Date(item.date);
                return (
                  <Comment
                    key={item.id}
                    id={item.id}
                    avatar={item.author_avatar_urls}
                    author={item.author_name}
                    content={item.content.rendered}
                    post={item.post}
                    date={date}
                    nestLvl={nestLvl}
                    replyTo={replyTo}
                    setReplyTo={setReplyTo}
                    formRef={formRef}
                  />
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default connect(List);
