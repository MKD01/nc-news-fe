import { Skeleton } from "@mui/material";
import React from "react";
import ArticlesCardLoader from "../Articles/ArticlesCardLoader";

const HomeLoader = () => {
  return (
    <div id='home-container'>
      <div id='carousel-container'>
        <Skeleton
          sx={{
            bgcolor: "grey.700",
            height: "40rem",
            width: "100%",
          }}
          variant='rounded'
          className='carousel-image'
        />

        <div className='text-with-link'>
          <Skeleton
            sx={{
              bgcolor: "grey.700",
              height: "1.5rem",
              width: "17rem",
            }}
            variant='rounded'
            className='article-image'
          />
        </div>
      </div>

      <div className='home-articles-container'>
        <ArticlesCardLoader />
        <ArticlesCardLoader />
        <ArticlesCardLoader />

        <div className='text-with-link popular-articles-text'>
          <Skeleton
            sx={{
              bgcolor: "grey.700",
              height: "1.5rem",
              width: "17rem",
            }}
            variant='rounded'
            id='latest-articles-text'
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
