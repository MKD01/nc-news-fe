import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { queryContext } from "../../contexts/QueryContext";
import ArticlesCard from "./ArticlesCard";
import ArticlesCardLoader from "./ArticlesCardLoader";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort_by, setSort_by, topic, setTopic } = useContext(queryContext);
  const [error, setError] = useState("");

  useEffect(() => {
    const topicParam = searchParams.get("topic");
    const sortByParam = searchParams.get("sort-by");

    if (sortByParam) {
      setSort_by(sortByParam);
    }

    if (topicParam) {
      setTopic(topicParam);
    }
  }, []);

  useEffect(() => {
    setIsLoading(true);

    searchParams.set("sort-by", sort_by);

    if (topic !== "Topics") {
      searchParams.set("topic", topic);
    } else {
      searchParams.delete("topic");
    }

    setSearchParams(searchParams);

    getArticles(topic, sort_by)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [sort_by, topic]);

  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <div className='articles-container'>
      {!isLoading
        ? articles.map((article) => {
            const articleHeading =
              article.title.length > 60
                ? article.title.slice(0, 60) + "..."
                : article.title;

            return (
              <ArticlesCard
                key={article.article_id}
                article={article}
                articleHeading={articleHeading}
              />
            );
          })
        : Array.from({ length: 20 }, (_, i) => i).map((blank) => {
            return <ArticlesCardLoader key={blank} />;
          })}
    </div>
  );
};

export default Articles;
