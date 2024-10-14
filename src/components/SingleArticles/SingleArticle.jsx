import { useLayoutEffect } from "react";
import Comments from "../Comments/Comments";
import SingleArticleCard from "./SingleArticleCard";
import BackButton from "../BackButton";

const SingleArticle = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='single-article-container'>
      <BackButton />
      <SingleArticleCard />
      <Comments />
    </div>
  );
};

export default SingleArticle;
