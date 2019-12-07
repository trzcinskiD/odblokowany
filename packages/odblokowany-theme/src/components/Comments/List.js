import React, { useEffect, useState } from "react";
import { connect } from "frontity";
import Loading from "../Loading";
import Comment from "./Comment";

const List = ({ libraries, parentId, postId, nestLvl }) => {
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
                console.log(item);
                const date = new Date(item.date);
                return (
                  <Comment
                    key={item.id}
                    author={item.author_name}
                    date={date}
                    content={item.content.rendered}
                    post={item.post}
                    id={item.id}
                    nestLvl={nestLvl}
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
