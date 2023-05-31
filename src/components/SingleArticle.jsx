import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import Vote from "./Vote";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [voteButton, setVoteButton] = useState({
    clickType: null,
    clickAmount: 0,
  });
  const [voteAmount, setVoteAmount] = useState(0);

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
      <p>Votes: {singleArticle.votes + voteAmount}</p>
      <div>
        <Vote
          voteAmount={1}
          setVoteButton={setVoteButton}
          setVoteAmount={setVoteAmount}
        />
        Vote
        <Vote
          voteAmount={-1}
          setVoteButton={setVoteButton}
          setVoteAmount={setVoteAmount}
        />
      </div>
      <Comments />
    </div>
  );
};

export default SingleArticle;
