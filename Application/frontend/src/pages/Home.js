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
      <Link to="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} size="2x" />
      </Link>
      <Link to="/songs">
        <FontAwesomeIcon icon={faMusic} size="3x" />
      </Link>
      <Link to="/playlists">
        <FontAwesomeIcon icon={faList} size="2x" />
      </Link>
    </div>
  );
};

export default Home;
