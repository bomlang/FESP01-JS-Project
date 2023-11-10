import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();

  const handlePageBack = () => {
    navigate(-1);
  };

  return (
    <nav className="flex ml-[30px] mt-[20px] ">
      <button className="mx-1.5" onClick={handlePageBack}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-[25px] text-white font-bold"
        />
      </button>
    </nav>
  );
}

export default Nav;
