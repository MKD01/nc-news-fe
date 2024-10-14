import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button id='back-button' onClick={() => navigate(-1)}>
      <TbArrowBackUp />
    </button>
  );
};

export default BackButton;
