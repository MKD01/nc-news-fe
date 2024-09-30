import Comments from "../Comments/Comments";
import SingleArticleCard from "./SingleArticleCard";

const SingleArticle = () => {
  return (
    <div className='single-article-container'>
      <SingleArticleCard />
      <Comments />
    </div>
  );
};

export default SingleArticle;
