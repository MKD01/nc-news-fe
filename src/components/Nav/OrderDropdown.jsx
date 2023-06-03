import { useContext, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/utils";
import { useSearchParams } from "react-router-dom";
import useDropdown from "../../hooks/useDropdown";
import { queryContext } from "../../contexts/QueryContext";

const OrderDropdown = () => {
  const { order_by, setOrder_by } = useContext(queryContext);
  const {
    handleDropdownClose,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  } = useDropdown();

  const handleOptionsClick = (val) => {
    setOrder_by(val);
    handleDropdownClick();
  };

  return (
    <div ref={handleDropdownClose}>
      <button id='dropdown-button' onClick={handleDropdownClick}>
        {capitalizeFirstLetter(order_by)}
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
