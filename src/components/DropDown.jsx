import { useEffect, useRef, useState } from "react";

const DropDown = ({ buttonText, dropdownOptions }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef();

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
        {buttonText}
        <i className={`arrow ${isDropdownOpen ? "down" : "up"}`}></i>
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
