import { useEffect, useRef, useState } from "react";

export default function useDropdown() {
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
      if (!ref.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleDropdownClick = () => {
    setIsDropdownOpen((currVal) => !currVal);
  };

  return {
    handleDropdownClose: ref,
    handleDropdownClick,
    isDropdownOpen,
    arrowDirection,
  };
}
