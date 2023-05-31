import { useState } from "react";
import { patchComponentVotes } from "../utils/api";
import { useParams } from "react-router-dom";

const Vote = ({ voteAmount, setVoteButton, setVoteAmount }) => {
  const { articleId } = useParams();

  const handleVote = () => {
    const lookUpTable = {
      up: 1,
      down: -1,
    };

    setVoteButton(({ clickType, clickAmount }) => {
      let newClickType;
      let newClickAmount;
      let patchReqAmount = 0;

      if (lookUpTable[clickType] === voteAmount) {
        newClickType = null;
        newClickAmount = clickAmount === voteAmount ? 0 : voteAmount;
        patchReqAmount = lookUpTable[clickType] * -1;
      } else {
        newClickType = voteAmount >= 1 ? "up" : "down";
        newClickAmount = voteAmount;
        patchReqAmount = voteAmount;
      }

      setVoteAmount(newClickAmount);

      console.log(patchReqAmount);
      patchComponentVotes("articles", articleId, patchReqAmount); // happens twice because of a re-render?

      return {
        clickType: newClickType,
        clickAmount: newClickAmount,
      };
    });
  };

  return (
    <button onClick={handleVote}>{voteAmount === 1 ? "up" : "down"}</button>
  );
};

export default Vote;
