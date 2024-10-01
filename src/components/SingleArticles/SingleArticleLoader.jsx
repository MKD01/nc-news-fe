import { Skeleton } from "@mui/material";

const SingleArticleLoader = () => {
  return (
    <div className='item-loader'>
      <div className='single item'>
        <div className='info-container'>
          <div className='user-info-container'>
            <div className='header-profile white-border'>
              <Skeleton
                sx={{
                  bgcolor: "grey.700",
                }}
                variant='rounded'
                className='article-heading'
              />
            </div>
            <div className='user-info'>
              <Skeleton
                sx={{
                  bgcolor: "grey.700",
                  width: "6rem",
                  height: "1.5rem",
                }}
                variant='rounded'
                className='article-author'
              />
              <Skeleton
                sx={{
                  bgcolor: "grey.700",
                  width: "4rem",
                  marginTop: "0.2rem",
                }}
                variant='rounded'
                className='article-topic'
              />
            </div>
          </div>

          <Skeleton
            sx={{
              bgcolor: "grey.700",
              width: "5rem",
              height: "1.5rem",
            }}
            variant='rounded'
            className='article-date'
          />
        </div>

        <div className='main-content'>
          <Skeleton
            sx={{
              bgcolor: "grey.700",
              width: "30rem",
              height: "1rem",
            }}
            variant='rounded'
            className='article-heading '
          />
          <div className='article-body'>
            <Skeleton
              sx={{
                bgcolor: "grey.700",
                height: "15rem",
                width: "25.5rem",
                marginTop: "1rem",
              }}
              variant='rounded'
              className='article-image'
            />
            <Skeleton
              sx={{
                bgcolor: "grey.700",
                maxWidth: "50rem",
                height: "6rem",
                marginTop: "1rem",
              }}
              variant='rounded'
              className='article-text'
            />
          </div>

          <div className='article-bottom'>
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
                width: "4rem",
              }}
              variant='rounded'
              className='likes'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticleLoader;
