import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {articles.map((article) => {
        return (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <article id='article-container'>
              <h2>{article.title}</h2>
              <h3>Author: {article.author}</h3>
              <h3>Topic: {article.topic}</h3>
              <p>Votes: {article.votes}</p>
              <p>Date: {article.created_at}</p>
              <p>Comments: {article.comment_count}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Articles;
