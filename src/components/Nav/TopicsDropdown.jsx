import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import useDropdown from "../../hooks/useDropdown";
import { getTopics } from "../../utils/api";

const TopicsDropdown = () => {
  const [selected, setSelected] = useState("Topics");
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  useEffect(() => {
    setIsLoading(false);
  }, [topics]);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
    });
  }, []);

  useEffect(() => {
    const topic = searchParams.get("topic");

    if (topic) {
      setSelected(topic);
    } else {
      setSelected("Topics");
    }
  }, [searchParams]);

  const handleOptionsClick = (val) => {
    setSelected(val);
    searchParams.set("topic", val);
    setSearchParams(searchParams);
    handleDropdownClick();
  };

  return (
    <div ref={handleDropdownClose}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(selected)}
        <i className={`arrow ${arrowDirection}`}></i>
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          {!isLoading ? (
            topics.map((topic) => {
              return (
                <li className='options-container' key={topic.slug}>
                  <button
                    className='dropdown-options'
                    onClick={() => handleOptionsClick(topic.slug)}
                  >
                    {capitalizeFirstLetter(topic.slug)}
                  </button>
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

export default TopicsDropdown;
