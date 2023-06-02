import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { capitalizeFirstLetter } from "../../utils/utils";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (articles.length) {
      setIsLoading(false);
    }
  }, [articles]);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div id='articles-container'>
      {articles.map((article) => {
        return (
          <Link
            id='article'
            className='articles'
            to={`/articles/${article.article_id}`}
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
                <p className='article-date'>{article.created_at}</p>
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
