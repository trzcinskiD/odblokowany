import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import Loading from "./Loading";
import formatDate from "../util/formatDate";

const Comments = ({ libraries, postId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    libraries.source.api
      .get({
        endpoint: "comments",
        params: { post: postId, _embed: false, per_page: 100 }
      })
      .then(response => {
        response.json().then(data => {
          setComments(data);
          setLoading(false);
        });
      });
  }, []);

  return (
    <CommentBox className="comment">
      <h3>Komentarze</h3>
      {loading && <Loading />}
      {!loading && (
        <div>
          {comments.length === 0 && <p>Brak komentarzy</p>}
          {comments.length > 0 && (
            <>
              {comments.map(item => {
                const date = new Date(item.date);
                return (
                  <SingleComment key={item.id}>
                    <Author>
                      <b>{item.author_name}</b>
                    </Author>
                    <Fecha>
                      , dodano <b>{formatDate(date)}</b>
                    </Fecha>
                    <SingleCommentContent
                      dangerouslySetInnerHTML={{
                        __html: item.content.rendered
                      }}
                    />
                  </SingleComment>
                );
              })}
            </>
          )}
        </div>
      )}
    </CommentBox>
  );
};

export default connect(Comments);

const CommentBox = styled.div`
  display: block;
  margin: 20px 0;
`;

const SingleComment = styled.div`
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.09);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 10px 0;
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

const SingleCommentContent = styled.div`
  font-size: 0.9em;
  p {
    margin: 7px 0;
  }
`;
