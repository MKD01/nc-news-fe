import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";
import Vote from "./Vote";
import { formatDate } from "../../utils/utils";

const Comments = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (comments.length) {
      setIsLoading(false);
    }
  }, [comments]);

  useEffect(() => {
    getCommentsByArticleId(articleId).then(({ comments }) => {
      setComments(comments);
    });
  }, []);

  if (isLoading) {
    return (
      <div id='loader-container'>
        <div id='loader'></div>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className='single comments' key={comment.comment_id}>
            {/* <Vote
              votes={comment.votes}
              componentName='comments'
              componentId={comment.comment_id}
            /> */}
            <div className='single-comment-content'>
              <div className='info-container'>
                <div className='user-info-container'>
                  <div className='comment-header-profile white-border'>
                    <img src={comment.author_avatar_url} alt={comment.author} />
                  </div>
                  <h2>{comment.author}</h2>
                </div>
                <p>{formatDate(comment.created_at)}</p>
              </div>
              <div className='main-content'>
                <p>{comment.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
