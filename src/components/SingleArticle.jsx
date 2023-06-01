import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import Vote from "./Vote";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(articleId).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{singleArticle.title}</h2>
      <p>{singleArticle.body}</p>
      <h3>Author: {singleArticle.author}</h3>
      <h3>Topic: {singleArticle.topic}</h3>
      <p>Date: {singleArticle.created_at}</p>
      <Vote
        votes={singleArticle.votes}
        componentName='articles'
        componentId={articleId}
      />
      <Comments />
    </div>
  );
};

export default SingleArticle;
