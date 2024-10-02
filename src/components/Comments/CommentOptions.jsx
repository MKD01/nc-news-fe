import { userContext } from "../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";
import useModel from "../../hooks/useModel";
import { deleteComment } from "../../utils/api";

const CommentOptions = ({ author, commentId, setComments }) => {
  const [isRequestPending, setIsRequestPending] = useState(false);
  const [err, setErr] = useState("");
  const { user } = useContext(userContext);
  const { isModelOpen, modelRef, handleModelClick } = useModel();

  const handleDeleteClick = () => {
    setIsRequestPending(true);
    deleteComment(commentId)
      .then(() => {
        setIsRequestPending(false);
        handleModelClick();
        setComments((comments) => {
          return comments.filter((comment) => {
            return comment.comment_id !== commentId;
          });
        });
      })
      .catch(() => {
        setErr("Something Went Wrong :(");
      });
  };

  if (err) {
    return <p>{err}</p>;
  }

  return (
    user.username === author && (
      <div id='comment-delete-container' ref={modelRef}>
        <button className='delete-option' onClick={handleModelClick}>
          <span>
            <RxDotsHorizontal />
          </span>
        </button>
        {isModelOpen && (
          <ul id='model-options-containers'>
            <div className={`options-arrow`}></div>

            <button
              className='model-options'
              disabled={isRequestPending}
              onClick={handleDeleteClick}
              // className='delete-button'
            >
              {isRequestPending ? (
                "Deleting..."
              ) : (
                <>
                  <RiDeleteBin5Line /> Delete Comment
                </>
              )}
            </button>
          </ul>
        )}
      </div>
    )
  );
};

export default CommentOptions;
