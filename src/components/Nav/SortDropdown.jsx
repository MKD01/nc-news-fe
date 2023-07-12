import { useContext, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { Link } from "react-router-dom";
import useDropdown from "../../hooks/useDropdown";
import { queryContext } from "../../contexts/QueryContext";

const SortDropdown = () => {
  const [dropdownOptions] = useState([
    "Latest",
    "Oldest",
    "Popular",
    "Unpopular",
  ]);

  const { sort_by, setSort_by } = useContext(queryContext);
  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  const handleOptionsClick = (val) => {
    setSort_by(val);
    handleDropdownClick();
  };

  return (
    <div ref={handleDropdownClose}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(sort_by)}
        <i className={`arrow ${arrowDirection}`}></i>
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          {dropdownOptions.map((option) => {
            return (
              <li key={option} className='options-container'>
                <Link
                  to={`/articles`}
                  className='dropdown-options'
                  onClick={() => handleOptionsClick(option)}
                >
                  {option}
                </Link>
                <div className='underline' />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
