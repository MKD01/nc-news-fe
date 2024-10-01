import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";
import SingleComment from "./SingleComment";
import PostComment from "./PostComment";
import CommentsLoader from "./CommentsLoader";

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
    return <CommentsLoader />;
  }

  return (
    <div className='full-width'>
      <PostComment articleId={articleId} setComments={setComments} />
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
