import { useEffect, useRef, useState } from "react";
import useModel from "../hooks/useModel";

const DropDown = ({ buttonText, dropdownOptions }) => {
  const { isModelOpen, modelRef, handleModelClick } = useModel();

  return (
    <div id='dropdown-container' ref={modelRef}>
      <button id='dropdown-button' onClick={handleModelClick}>
        {buttonText}
        <i className={`arrow ${isModelOpen ? "down" : "up"}`}></i>
      </button>
      {isModelOpen && (
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
