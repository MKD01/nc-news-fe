import { VscCommentDiscussion } from "react-icons/vsc";
import { getArticleById } from "../../utils/api";
import { capitalizeFirstLetter, formatDate } from "../../utils/utils";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Vote from "./Vote";
import SingleArticleLoader from "./SingleArticleLoader";

const SingleArticleCard = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId).then(({ article }) => {
      setArticle(article);

      // setTimeout(() => {
      setIsLoading(false);
      // }, 300);
      // The above can be endbled once a skeleton has been setup for this component
    });
  }, []);

  if (isLoading) {
    return <SingleArticleLoader />;
  }

  return (
    <div className='single item'>
      <div className='info-container'>
        <div className='user-info-container'>
          <div className='header-profile white-border'>
            <img src={article.author_avatar_url} alt={article.author} />
          </div>
          <div className='user-info'>
            <h3 className='article-author'>{article.author}</h3>
            <Link
              to={`/articles?topic=${article.topic}`}
              className='article-topic'
            >
              {capitalizeFirstLetter(article.topic)}
            </Link>
          </div>
        </div>

        <p className='article-date'>{formatDate(article.created_at)}</p>
      </div>

      <div className='main-content'>
        <h2 className='article-heading'>{article.title}</h2>
        <div className='article-body'>
          <img
            className='article-image'
            src={article.article_img_url}
            alt={article.title}
          />
          <p className='article-text'>{article.body}</p>
        </div>

        <div className='article-bottom'>
          <p className='article-comment-count'>
            <VscCommentDiscussion /> {article.comment_count}
          </p>
          <Vote
            votes={article.votes}
            componentName='articles'
            componentId={article.article_id}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleArticleCard;
