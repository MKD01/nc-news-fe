import { useEffect, useRef, useState } from "react";
import { capitalizeFirstLetter } from "../utils/utils";

const DropDown = ({ buttonText, onClose, dropdownOptions }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [arrowDirection, setArrowDirection] = useState({});
  const ref = useRef();

  useEffect(() => {
    if (isDropdownOpen) {
      setArrowDirection("down");
    } else {
      setArrowDirection("up");
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleDropdownClick = () => {
    setIsDropdownOpen((currVal) => !currVal);
  };

  return (
    <div ref={ref}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(buttonText)}
        <i className={`arrow ${arrowDirection}`}></i>
      </button>
      {isDropdownOpen && (
        <ul id='dropdown-options-containers'>
          <div className={`options-arrow`}></div>

          {dropdownOptions.map(({ name, value }) => {
            return (
              <li key={name} className='options-container'>
                {value}
                <div className='underline' />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
