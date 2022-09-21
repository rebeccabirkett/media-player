import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

const MusicPlayer = () => {
  return (
    <div className="container">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} />
      </Link>
      // Render a YouTube video player
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
    </div>
  );
};

export default MusicPlayer;
