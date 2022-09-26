import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMusic,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <div className="menu">
        <Link to="/search" className="menu-btn">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
        </Link>
        <Link to="/songs" className="menu-btn" id="songs">
          <FontAwesomeIcon icon={faMusic} size="3x" />
        </Link>
        <Link to="/playlists" className="menu-btn">
          <FontAwesomeIcon icon={faList} size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
