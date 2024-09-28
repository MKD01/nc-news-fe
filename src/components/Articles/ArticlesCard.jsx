import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";
import { VscCommentDiscussion } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";
import { useState } from "react";

const ArticlesCard = ({ article, articleHeading }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      className='articles'
      to={`/articles/${article.article_id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        className={`${hovered ? "hovered" : "none-hovered"} article-image`}
        src={article.article_img_url}
        alt={article.title}
      />
      <div className='article-card-info'>
        <h2 className='article-heading'>{articleHeading}</h2>

        <div className='article-bottom'>
          <p className='article-date'>{formatDate(article.created_at)}</p>
          <p className='article-comment-count'>
            <VscCommentDiscussion /> {article.comment_count}
          </p>
          <p className='article-likes'>
            <SlLike /> {article.votes}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticlesCard;
