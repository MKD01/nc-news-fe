import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { queryContext } from "../../contexts/QueryContext";
import ArticlesCard from "./ArticlesCard";
import ArticlesCardLoader from "./ArticlesCardLoader";
import Nav from "../Nav/Nav";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort_by, setSort_by, topic, setTopic } = useContext(queryContext);
  const [error, setError] = useState("");
  const articlesList = useRef();

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

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    searchParams.set("sort-by", sort_by);

    if (topic !== "Topics") {
      searchParams.set("topic", topic);
    } else {
      searchParams.delete("topic");
    }

    setSearchParams(searchParams);

    getArticles(topic, sort_by, page)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [sort_by, topic]);

  const fetchArticles = () => {
    setPage((currPage) => {
      const newPage = currPage + 1;

      setIsLoading(true);

      getArticles(topic, sort_by, newPage)
        .then(({ articles }) => {
          if (articles.length === 0) {
            setPage(newPage - 1);
            return;
          }

          setArticles((currArticles) => [...currArticles, ...articles]);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
        });

      return newPage;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  if (error) {
    return <h2>Error...</h2>;
  }

  const handleScroll = () => {
    const currScrollPosition =
      window.innerHeight + document.documentElement.scrollTop;
    const bottomOfPagePosition = document.documentElement.offsetHeight;

    if (currScrollPosition === bottomOfPagePosition && !isLoading) {
      fetchArticles();
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
