import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../utils/api";
import Vote from "./Vote";

const Comments = () => {
  const { articleId } = useParams();
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(articleId).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <h2>Author: {comment.author}</h2>
            <p>{comment.body}</p>
            <p>Date: {comment.created_at}</p>
            <Vote
              votes={comment.votes}
              componentName='comments'
              componentId={comment.comment_id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
