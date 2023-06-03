import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import useDropdown from "../../hooks/useDropdown";

const SortDropdown = () => {
  const [selected, setSelected] = useState("date");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  useEffect(() => {
    const sort = searchParams.get("sort-by");

    if (sort) {
      setSelected(sort);
    } else {
      setSelected("date");
      //   searchParams.set("sort-by", "date");
      //   setSearchParams(searchParams);
    }
  }, [searchParams]);

  const handleOptionsClick = (val) => {
    setSelected(val);
    searchParams.set("sort-by", val);
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

          <li className='options-container'>
            <button
              className='dropdown-options'
              onClick={() => handleOptionsClick("date")}
            >
              Date
            </button>
            <div className='underline' />
          </li>

          <li className='options-container'>
            <button
              className='dropdown-options'
              onClick={() => handleOptionsClick("votes")}
            >
              Votes
            </button>
            <div className='underline' />
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortDropdown;
