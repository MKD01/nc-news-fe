import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import Comments from "./Comments";
import Vote from "./Vote";
import { capitalizeFirstLetter, formatDate } from "../../utils/utils";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(articleId).then(({ article }) => {
      setSingleArticle(article);

      // setTimeout(() => {
      setIsLoading(false);
      // }, 300);
      // The above can be endbled once a skeleton has been setup for this component
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
    <div className='single-article-container'>
      <div className='single article'>
        {/* <Vote
          votes={singleArticle.votes}
          componentName='articles'
          componentId={articleId}
        /> */}
        <div className='single-article-content'>
          <div className='info-container'>
            <div className='user-info'>
              <h3 className='article-author'>{singleArticle.author}</h3>
              <Link
                to={`/articles?topic=${singleArticle.topic}`}
                className='article-topic'
              >
                {capitalizeFirstLetter(singleArticle.topic)}
              </Link>
            </div>

            <p className='article-date'>
              {formatDate(singleArticle.created_at)}
            </p>
          </div>

          <div className='main-content'>
            <h2 className='article-heading'>{singleArticle.title}</h2>
            <p className='article-body'>{singleArticle.body}</p>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SingleArticle;
