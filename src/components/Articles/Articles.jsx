import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { capitalizeFirstLetter, formatDate } from "../../utils/utils";
import { queryContext } from "../../contexts/QueryContext";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort_by, order_by, topic } = useContext(queryContext);

  useEffect(() => {
    if (topic !== "Topics") {
      searchParams.set("topic", topic);
    }
    searchParams.set("sort-by", sort_by);
    searchParams.set("order-by", order_by);
    setSearchParams(searchParams);
  }, [sort_by, order_by, topic, searchParams]);

  useEffect(() => {
    if (articles.length) {
      setIsLoading(false);
    }
  }, [articles]);

  useEffect(() => {
    setIsLoading(true);
    const topic = searchParams.get("topic");
    const orderBy = searchParams.get("order-by");
    const sortBy = searchParams.get("sort-by");

    getArticles(topic, sortBy, orderBy)
      .then(({ articles }) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams]);

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
