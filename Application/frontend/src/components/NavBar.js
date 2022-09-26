import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ lefticonname, leftroute, righticonname, rightroute }) => {
  let lefticon = null;
  if (lefticonname) {
    lefticon = <FontAwesomeIcon icon={lefticonname} size="1x" />;
  }

  let righticon = null;
  if (righticonname) {
    righticon = <FontAwesomeIcon icon={righticonname} size="1x" />;
  }

  return (
    <div className="nav">
      <Link to={leftroute || "#"} disabled={!leftroute}>
        {lefticon}
      </Link>
      <Link to={rightroute || "#"} disabled={!rightroute}>
        {righticon}
      </Link>
    </div>
  );
};

export default NavBar;
