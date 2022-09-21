import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Songs = () => {
  return (
    <div className="container">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
    </div>
  );
};

export default Songs;
