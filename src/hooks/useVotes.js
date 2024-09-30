import { useState } from "react";
import { patchComponentVotes } from "../utils/api";

export default function useVotes() {
  const [voteAmount, setVoteAmount] = useState(0);
  const [error, setError] = useState("");

  const handleError = (err) => {
    setError(err);
  };

  const handleVote = (vote, componentId, componentName) => {
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

  return {
    error,
    voteAmount,
    handleVote,
  };
}
