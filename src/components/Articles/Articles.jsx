import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import ArticlesCard from "./ArticlesCard";
import ArticlesCardLoader from "./ArticlesCardLoader";
import Nav from "../Nav/Nav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [finalPageNum, setFinalPageNum] = useState(0);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  const articlesList = useRef();

  const sortBy = searchParams.get("sort-by");
  const topic = searchParams.get("topic");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsLoading(true);

    getArticles(topic, sortBy, 1)
      .then(({ articles, count }) => {
        setFinalPageNum(Math.ceil(count / 10));
        setArticles(articles);

        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic, sortBy]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [articles]);

  if (error) {
    return <h2>Error...</h2>;
  }

  const handleScroll = () => {
    const currScrollPosition = Math.ceil(
      window.innerHeight + document.documentElement.scrollTop
    );
    const bottomOfPagePosition = document.documentElement.offsetHeight;

    if (currScrollPosition === bottomOfPagePosition && !isLoading) {
      const pageNum = Math.ceil(articles.length / 10) + 1;

      if (pageNum > finalPageNum) return;

      getArticles(topic, sortBy, pageNum)
        .then(({ articles }) => {
          setArticles((currArticles) => [...currArticles, ...articles]);
        })
        .catch((err) => {
          setError(err);
        });
    }
  };

  if (isLoading && articles.length === 0) {
    return (
      <div ref={articlesList} className='articles-container'>
        {Array.from({ length: 20 }, (_, i) => i).map((blank) => {
          return <ArticlesCardLoader key={blank} />;
        })}
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className='articles-container'>
        {articles.map((article) => {
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
        })}
      </div>
    </div>
  );
};

export default Articles;
