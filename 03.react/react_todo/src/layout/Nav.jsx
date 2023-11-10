import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <nav className="flex ml-[30px] mt-[20px] ">
      <i className="mx-1.5">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-[25px] text-white font-bold"
        />
      </i>
    </nav>
  );
}

export default Nav;
