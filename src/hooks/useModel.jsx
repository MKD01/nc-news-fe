import { useEffect, useRef, useState } from "react";

const useModel = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const modelRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modelRef.current && !modelRef.current.contains(event.target)) {
        setIsModelOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, [modelRef]);

  const handleModelClick = () => {
    setIsModelOpen((currVal) => !currVal);
  };

  return { isModelOpen, modelRef, handleModelClick };
};

export default useModel;
