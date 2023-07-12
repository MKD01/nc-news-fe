import { useContext, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import useDropdown from "../../hooks/useDropdown";
import { getTopics } from "../../utils/api";
import { queryContext } from "../../contexts/QueryContext";
import { Link } from "react-router-dom";

const TopicsDropdown = () => {
  const { topic, setTopic } = useContext(queryContext);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
      setIsLoading(false);
    });
  }, []);

  const handleOptionsClick = (val) => {
    setTopic(val);
    handleDropdownClick();
  };

  return (
    <div ref={handleDropdownClose}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(topic)}
        <i className={`arrow ${arrowDirection}`}></i>
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          {!isLoading ? (
            <>
              <li className='options-container'>
                <Link
                  to={`/articles`}
                  className='dropdown-options'
                  onClick={() => handleOptionsClick("Topics")}
                >
                  All
                </Link>
                <div className='underline' />
              </li>

              {topics.map((topic) => {
                return (
                  <li className='options-container' key={topic.slug}>
                    <Link
                      to={`/articles`}
                      className='dropdown-options'
                      onClick={() => handleOptionsClick(topic.slug)}
                    >
                      {capitalizeFirstLetter(topic.slug)}
                    </Link>
                    <div className='underline' />
                  </li>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </ul>
      )}
    </div>
  );
};

export default TopicsDropdown;
