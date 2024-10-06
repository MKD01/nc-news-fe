import { useState, useEffect, useLayoutEffect } from "react";
import { getArticles } from "../../utils/api";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { Link } from "react-router-dom";
import ArticlesCard from "../Articles/ArticlesCard";
import HomeLoader from "./HomeLoader";

const Home = () => {
  const [popularArticles, setPopularArticles] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState("");

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const articleRequests = [
      getArticles("", "Latest", 1, 3),
      getArticles("", "Popular", 1, 3),
    ];

    Promise.all(articleRequests)
      .then(([{ articles: latestArticles }, { articles: popularArticles }]) => {
        setPopularArticles(popularArticles);
        setLatestArticles(popularArticles);

        setIsLoading(false);
      })
      .catch((err) => {
        setErr(err);
      });
  }, []);

  if (err) {
    return <p>Something went wrong {":("}</p>;
  }

  if (isLoading) {
    return <HomeLoader />;
  }

  return (
    <div id='home-container'>
      <div id='carousel-container'>
        <CCarousel controls indicators dark>
          {latestArticles.map((article, i) => {
            return (
              <CCarouselItem key={article.article_id}>
                <div>
                  <img
                    className='carousel-image'
                    src={article.article_img_url}
                    alt={article.title}
                  />
                </div>
                <div className='carousel-info'>
                  <h2 className='carousel-heading'>{article.title}</h2>
                </div>
              </CCarouselItem>
            );
          })}
        </CCarousel>
        <div className='text-with-link'>
          <p id='latest-articles-text'>View more of the latest articles</p>
          <Link to='/articles?sort-by=Latest'>Here</Link>
        </div>
      </div>

      <div className='home-articles-container'>
        {popularArticles.map((article) => {
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
        <div className='text-with-link popular-articles-text'>
          <p id='latest-articles-text'>
            View more of the most popular articles
          </p>
          <Link to='/articles?sort-by=Popular'>Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
