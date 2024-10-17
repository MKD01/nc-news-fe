import { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { useSearchParams } from "react-router-dom";
import DropDown from "../DropDown";
import { capitalizeFirstLetter } from "../../utils/utils";

const TopicsDropdown = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const topic = searchParams.get("topic") || "All articles";

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (val) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", val);
    setSearchParams(newParams);
  };

  return (
    <DropDown
      buttonText={capitalizeFirstLetter(topic)}
      dropdownOptions={[
        {
          name: "All",
          value: (
            <div
              className='dropdown-options'
              onClick={() => handleClick("All articles")}
            >
              All articles
            </div>
          ),
        },
        ...topics.map((topic) => {
          return {
            name: topic.slug,
            value: (
              <div
                className='dropdown-options'
                onClick={() => handleClick(topic.slug)}
              >
                {capitalizeFirstLetter(topic.slug)}
              </div>
            ),
          };
        }),
      ]}
    />
  );
};

export default TopicsDropdown;
