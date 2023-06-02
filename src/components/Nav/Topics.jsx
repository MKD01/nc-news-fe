import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../utils/api";
import Dropdown from "./Dropdown";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [topics]);

  useEffect(() => {
    setIsLoading(true);
    getTopics().then((topicsResponse) => {
      setTopics(topicsResponse);
    });
  }, []);

  return (
    <div>
      {/* <Link to={`/articles?topic=${topics}`}>Topics</Link> */}
      <Dropdown topics={topics} isLoading={isLoading} />
    </div>
  );
};

export default Topics;
