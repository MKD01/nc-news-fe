import { useLayoutEffect } from "react";
import Comments from "../Comments/Comments";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='single-article-container'>
      <SingleArticleCard />
      <Comments />
    </div>
  );
};

export default SingleArticle;
