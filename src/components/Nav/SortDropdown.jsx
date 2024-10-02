import { useContext } from "react";
import { Link } from "react-router-dom";
import { queryContext } from "../../contexts/QueryContext";
import DropDown from "../DropDown";
import { capitalizeFirstLetter } from "../../utils/utils";

const SortDropdown = () => {
  const dropdownOptions = ["Latest", "Oldest", "Popular", "Unpopular"];

  const { sort_by, setSort_by } = useContext(queryContext);

  const handleClick = (val) => {
    setSort_by(val);
  };

  return (
    <DropDown
      buttonText={capitalizeFirstLetter(sort_by)}
      dropdownOptions={dropdownOptions.map((option) => {
        return {
          name: option,
          value: (
            <Link
              to={`/articles`}
              className='dropdown-options'
              onClick={() => handleClick(option)}
            >
              {option}
            </Link>
          ),
        };
      })}
    />
  );
};

export default SortDropdown;
