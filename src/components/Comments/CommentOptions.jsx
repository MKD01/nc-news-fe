import { userContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { RiDeleteBin5Line } from "react-icons/ri";

const CommentOptions = ({ author }) => {
  const [displayOptions, setDisplayOptions] = useState(false);
  const { user } = useContext(userContext);

  const handleClick = () => {
    setDisplayOptions(true);
  };

  return (
    <>
      {author === user.username && (
        <button onClick={handleClick} className='delete-option'>
          <span>
            <RxDotsHorizontal />
          </span>
        </button>
      )}

      {displayOptions && (
        <div className='comment-options'>
          <p>Options</p>
          <div className='options-linebreak' />
          <button>
            <RiDeleteBin5Line />
            Delete Comment
          </button>
        </div>
      )}
    </>
  );
};

export default CommentOptions;
