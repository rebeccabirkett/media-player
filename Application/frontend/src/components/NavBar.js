import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ lefticonname, leftroute, righticonname, rightroute }) => {
  return (
    <div className="nav">
      <Link to={leftroute}>
        <FontAwesomeIcon icon={lefticonname} size="1x" />
      </Link>
      <Link to={rightroute}>
        <FontAwesomeIcon icon={righticonname} size="1x" />
      </Link>
    </div>
  );
};

export default NavBar;
