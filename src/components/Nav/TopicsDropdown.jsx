import { useContext, useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { queryContext } from "../../contexts/QueryContext";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import DropDown from "../DropDown";

const TopicsDropdown = () => {
  const { topic, setTopic } = useContext(queryContext);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (val) => {
    setTopic(val);
  };

  return (
    <DropDown
      buttonText={topic}
      onClose={handleClick}
      dropdownOptions={topics.map((topic) => {
        return {
          name: topic.slug,
          value: (
            <Link
              to={`/articles`}
              className='dropdown-options'
              onClick={() => handleClick(topic.slug)}
            >
              {topic.slug}
            </Link>
          ),
        };
      })}
    />
  );
};

export default TopicsDropdown;
