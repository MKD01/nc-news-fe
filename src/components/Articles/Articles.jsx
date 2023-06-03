import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { capitalizeFirstLetter, formatDate } from "../../utils/utils";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useSearchParams();

  useEffect(() => {
    const pathName = window.location.pathname;

    if (pathName.length > 1) {
      console.log(pathName);
    }
  }, [params]);

  useEffect(() => {
    if (articles.length) {
      setIsLoading(false);
    }
  }, [articles]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
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
    <div className='articles-container'>
      {articles.map((article) => {
        return (
          <Link
            className='articles'
            to={`/article/${article.article_id}`}
            key={article.article_id}
          >
            <article>
              <h2 className='article-heading'>{article.title}</h2>

              <div className='article-top'>
                <h3 className='article-author'>By {article.author}</h3>
                <h3 className='article-topic'>
                  {capitalizeFirstLetter(article.topic)}
                </h3>
              </div>

              <div className='article-bottom'>
                <p className='article-date'>{formatDate(article.created_at)}</p>
                <p className='article-comment-count'>
                  Comments: {article.comment_count}
                </p>
                <p className='article-likes'>Likes: {article.votes}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Articles;
