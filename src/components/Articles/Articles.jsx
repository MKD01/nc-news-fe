import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/api";
import { formatDate } from "../../utils/utils";
import { queryContext } from "../../contexts/QueryContext";
import { VscCommentDiscussion } from "react-icons/vsc";
import { SlLike } from "react-icons/sl";
import Skeleton from "@mui/material/Skeleton";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { sort_by, setSort_by, topic, setTopic } = useContext(queryContext);

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
        console.log(err);
      });
  }, [sort_by, topic]);

  return (
    <div className='articles-container'>
      {!isLoading
        ? articles.map((article) => {
            const articleHeading =
              article.title.length > 60
                ? article.title.slice(0, 60) + "..."
                : article.title;

            return (
              <Link
                className='articles'
                to={`/articles/${article.article_id}`}
                key={article.article_id}
                onMouseEnter={() => console.log("enter")}
                onMouseLeave={() => console.log("leave")}
              >
                <img
                  className='article-image'
                  src={article.article_img_url}
                  alt={article.title}
                />
                <h2 className='article-heading'>{articleHeading}</h2>

                <div className='article-bottom'>
                  <p className='article-date'>
                    {formatDate(article.created_at)}
                  </p>
                  <p className='article-comment-count'>
                    <VscCommentDiscussion /> {article.comment_count}
                  </p>
                  <p className='article-likes'>
                    <SlLike /> {article.votes}
                  </p>
                </div>
              </Link>
            );
          })
        : Array.from({ length: 20 }, (_, i) => i).map((blank) => {
            return (
              <div className='articles' key={blank}>
                <Skeleton
                  sx={{
                    bgcolor: "grey.700",
                    height: "15rem",
                  }}
                  variant='rounded'
                  className='article-image'
                />
                <Skeleton
                  sx={{
                    bgcolor: "grey.700",
                    height: "6rem",
                    marginTop: "1.4rem",
                  }}
                  variant='rounded'
                  className='article-heading '
                />
                <div className='article-bottom'>
                  <Skeleton
                    sx={{
                      bgcolor: "grey.700",
                      width: "7rem",
                    }}
                    variant='rounded'
                    className='article-date'
                  />
                  <Skeleton
                    sx={{
                      bgcolor: "grey.700",
                      width: "3rem",
                    }}
                    variant='rounded'
                    className='article-comment-count'
                  />
                  <Skeleton
                    sx={{
                      bgcolor: "grey.700",
                      width: "3rem",
                    }}
                    variant='rounded'
                    className='article-likes'
                  />
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Articles;
