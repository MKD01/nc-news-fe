import { useEffect, useState } from "react";
import { patchComponentVotes } from "../../utils/api";
import { SlDislike, SlLike } from "react-icons/sl";

const Vote = ({ votes, componentName, componentId }) => {
  const [voteAmount, setVoteAmount] = useState(0);
  const [error, setError] = useState("");

  const handleError = (err) => {
    setError(err);
  };

  const handleVote = (vote) => {
    setVoteAmount((currVal) => {
      if (currVal === 0) {
        patchComponentVotes(componentName, componentId, vote).catch(
          handleError
        );
        return vote;
      }

      if (currVal !== vote) {
        patchComponentVotes(componentName, componentId, vote * 2).catch(
          handleError
        );
        return vote;
      }

      patchComponentVotes(componentName, componentId, -vote).catch(handleError);
      return 0;
    });
  };

  if (error) {
    return (
      <div className='vote-container vote-error'>
        <p>There seems to be an error displaying the vote amount...</p>
      </div>
    );
  }

  return (
    <p className='likes'>
      <SlLike
        className={voteAmount === 1 ? "red" : ""}
        onClick={() => handleVote(1)}
      />
      {votes + voteAmount}
      <SlDislike
        className={voteAmount === -1 ? "red" : ""}
        onClick={() => handleVote(-1)}
      />
    </p>
  );
};

export default Vote;
