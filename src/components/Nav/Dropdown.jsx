import { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";

const Dropdown = ({ topics, isLoading }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select a Topic");
  const [arrowDirection, setArrowDirection] = useState("up");

  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  useEffect(() => {
    if (isDropdownOpen) {
      setArrowDirection("down");
    } else {
      setArrowDirection("up");
    }
  }, [isDropdownOpen]);

  const handleDropdownClick = () => {
    setIsDropdownOpen((currVal) => !currVal);
  };

  const handleOptionsClick = (e) => {
    setSelected(e.target.value);
    handleDropdownClick();
  };

  return (
    <div ref={ref}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(selected)}
        <i className={`arrow ${arrowDirection}`}></i>
        {/* <div className='link-buttons link-topics'></div> */}
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          {!isLoading ? (
            topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <button
                    className='dropdown-options'
                    value={topic.slug}
                    onClick={handleOptionsClick}
                  >
                    {capitalizeFirstLetter(topic.slug)}
                  </button>
                  <div className='underline' />
                </li>
              );
            })
          ) : (
            <p className='dropdown-loading'>Loading Topics...</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
