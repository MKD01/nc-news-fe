import { useContext, useState } from "react";
import { userContext } from "../../contexts/UserContext";
import { postCommentByArticleId } from "../../utils/api";

const PostComment = ({ articleId, setComments }) => {
  const [comment, setComment] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useContext(userContext);

  const handleChange = (e) => {
    setComment(e.target.value);
    if (!isActive) {
      setIsActive(true);
    }
  };

  const handleClick = () => {
    setIsActive(true);
  };

  const handleCancel = () => {
    setIsActive(false);
    setComment("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      handlePost();
      event.target.blur();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    handlePost();
  };

  const handlePost = () => {
    setComment("");
    setMessage("Posting Comment...");
    postCommentByArticleId(articleId, user.username, comment)
      .then((newComment) => {
        setComments((comments) => [
          { ...newComment, author_avatar_url: user.avatar_url },
          ...comments,
        ]);
        setIsActive(false);
        setMessage("");
      })
      .catch(() => {
        setMessage("Error Posting Comment...");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='single item'>
      <form className='comment-form' onSubmit={handleSubmit}>
        <textarea
          className='comment-textarea'
          placeholder='Add a comment'
          value={comment}
          onChange={handleChange}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          readonly={isLoading}
        ></textarea>
        {isActive && (
          <div id='textarea-extention'>
            {message ? (
              <p>{message}</p>
            ) : (
              <>
                <button
                  className='cancel comment-button'
                  type='button'
                  onClick={handleCancel}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  className='post comment-button'
                  type='submit'
                  onSubmit={handleSubmit}
                  disabled={isLoading}
                >
                  Comment
                </button>
              </>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default PostComment;
