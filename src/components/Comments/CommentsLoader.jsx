import { Skeleton } from "@mui/material";

const CommentsLoader = () => {
  return (
    <div className='item-loader'>
      <div className='single item'>
        <form>
          <Skeleton
            sx={{
              bgcolor: "grey.700",
            }}
            variant='rounded'
            id='comment-textarea'
          />
        </form>
      </div>
      {Array.from({ length: 2 }, (_, i) => i).map((blank) => {
        return (
          <div key={blank} className='single item'>
            <div className='single-comment-content'>
              <div className='info-container'>
                <div className='user-info-container'>
                  <div className='comment-header-profile white-border'>
                    <Skeleton
                      sx={{
                        bgcolor: "grey.700",
                      }}
                      variant='rounded'
                      className='article-heading'
                    />
                  </div>
                  <Skeleton
                    sx={{
                      bgcolor: "grey.700",
                      width: "6rem",
                      height: "1.5rem",
                    }}
                    variant='rounded'
                  />
                </div>
                <Skeleton
                  sx={{
                    bgcolor: "grey.700",
                    width: "5rem",
                    height: "1.5rem",
                  }}
                  variant='rounded'
                />
              </div>
              <div className='main-content'>
                <Skeleton
                  sx={{
                    bgcolor: "grey.700",
                    width: "50rem",
                    height: "3rem",
                  }}
                  variant='rounded'
                />
              </div>
            </div>
            <div className='comment-bottom'>
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
        );
      })}
    </div>
  );
};

export default CommentsLoader;
