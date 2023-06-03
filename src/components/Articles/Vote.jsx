import { useEffect, useState } from "react";
import { patchComponentVotes } from "../../utils/api";

const Vote = ({ votes, componentName, componentId }) => {
  const [buttonClicked, setButtonClicked] = useState({ type: "", val: 0 });
  const [voteAmount, setVoteAmount] = useState(0);

  useEffect(() => {
    if (buttonClicked.type) {
      patchComponentVotes(componentName, componentId, buttonClicked.val);
    }
  }, [voteAmount]);

  const handleVote = (e) => {
    const lookUpTable = {
      up: 1,
      down: -1,
      1: "up",
      "-1": "down",
    };

    setButtonClicked(({ type }) => {
      let newType = "";
      let newVal = 0;

      if (lookUpTable[type] === voteAmount) {
        setVoteAmount(0);
        newType = lookUpTable[e.target.value];
        newVal = lookUpTable[type] * -1;
      } else {
        setVoteAmount(+e.target.value);
        newType = lookUpTable[e.target.value];
        newVal = +e.target.value;
      }

      console.dir(e.target);

      return { type: newType, val: newVal };
    });
  };

  if (isNaN(votes) || isNaN(voteAmount)) {
    return (
      <div className='vote-container vote-error'>
        <p>There seems to be an error displaying the vote amount...</p>
      </div>
    );
  }

  return (
    <div className='vote-container'>
      {/* <button className='vote-button' onClick={handleVote} value={1}> */}
      <button
        value={1}
        onClick={handleVote}
        className={`arrow up vote ${voteAmount === 1 ? "vote-selected" : ""}`}
      ></button>
      {/* </button> */}
      <p className={`vote-number`}>{votes + voteAmount}</p>
      {/* <button className='vote-button' onClick={handleVote} value={-1}> */}
      <button
        onClick={handleVote}
        value={-1}
        className={`arrow down vote ${
          voteAmount === -1 ? "vote-selected" : ""
        }`}
      ></button>
      {/* </button> */}
    </div>
  );
};

export default Vote;
