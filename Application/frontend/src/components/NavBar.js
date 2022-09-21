import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlay } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      <Link to="/player">
        <FontAwesomeIcon icon={faPlay} size="2x" />
      </Link>
    </div>
  );
};

export default NavBar;
