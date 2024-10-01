import { formatDate } from "../../utils/utils";
import Vote from "../SingleArticles/Vote";

const SingleComment = ({ comment }) => {
  return (
    <div className='single item'>
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
      <div className='comment-bottom'>
        <Vote
          votes={comment.votes}
          componentName='comments'
          componentId={comment.comment_id}
        />
      </div>
    </div>
  );
};

export default SingleComment;
