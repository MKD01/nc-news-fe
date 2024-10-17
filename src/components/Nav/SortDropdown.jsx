import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown";
import { capitalizeFirstLetter } from "../../utils/utils";

const SortDropdown = () => {
  const dropdownOptions = ["Latest", "Oldest", "Likes", "Comments"];
  const [searchParams, setSearchParams] = useSearchParams();

  const sort_by = searchParams.get("sort-by") || "Latest";

  const handleClick = (val) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort-by", val);
    setSearchParams(newParams);
  };

  return (
    <DropDown
      buttonText={capitalizeFirstLetter(sort_by)}
      dropdownOptions={dropdownOptions.map((option) => {
        return {
          name: option,
          value: (
            <div
              className='dropdown-options'
              onClick={() => handleClick(option)}
            >
              {option}
            </div>
          ),
        };
      })}
    ></DropDown>
  );
};

export default SortDropdown;
