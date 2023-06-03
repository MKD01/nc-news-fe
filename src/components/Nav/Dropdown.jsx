import { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { Link, useSearchParams } from "react-router-dom";

const Dropdown = ({ topics, isLoading }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Topics");
  const [arrowDirection, setArrowDirection] = useState("up");
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useRef();

  useEffect(() => {
    const topic = searchParams.get("topic");

    if (topic) {
      setSelected(topic);
    } else {
      setSelected("Topics");
    }
  }, [searchParams]);

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

  const handleOptionsClick = (val) => {
    setSelected(val);
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
                <li className='options-container' key={topic.slug}>
                  <Link
                    to={`/articles?topic=${topic.slug}`}
                    className='dropdown-options'
                    onClick={() => handleOptionsClick(topic.slug)}
                  >
                    {capitalizeFirstLetter(topic.slug)}
                  </Link>
                  <div className='underline' />
                </li>
              );
            })
          ) : (
            <div id='loader-container'>
              <div id='loader'></div>
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
