import Skeleton from "@mui/material/Skeleton";

const ArticlesCardLoader = ({}) => {
  return (
    <div className='articles'>
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
};

export default ArticlesCardLoader;
