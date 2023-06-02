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

      return { type: newType, val: newVal };
    });
  };

  if (isNaN(votes) || isNaN(voteAmount)) {
    return <p>There seems to be an error displaying the vote amount...</p>;
  }

  return (
    <div>
      <button onClick={handleVote} value={1}>
        up
      </button>
      <p>{votes + voteAmount}</p>
      <button onClick={handleVote} value={-1}>
        Down
      </button>
    </div>
  );
};

export default Vote;
