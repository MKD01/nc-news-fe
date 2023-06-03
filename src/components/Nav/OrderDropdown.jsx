import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import useDropdown from "../../hooks/useDropdown";

const OrderDropdown = () => {
  const [selected, setSelected] = useState("desc");
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  useEffect(() => {
    const order = searchParams.get("order");

    if (order) {
      setSelected(order);
    } else {
      setSelected("desc");
      searchParams.set("order", "desc");
      setSearchParams(searchParams);
    }
  }, [searchParams]);

  const handleOptionsClick = (val) => {
    setSelected(val);
    searchParams.set("order", val);
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
              onClick={() => handleOptionsClick("asc")}
            >
              Asc
            </button>
            <div className='underline' />
          </li>
          <li className='options-container'>
            <button
              className='dropdown-options'
              onClick={() => handleOptionsClick("desc")}
            >
              Desc
            </button>
            <div className='underline' />
          </li>
        </ul>
      )}
    </div>
  );
};

export default OrderDropdown;
