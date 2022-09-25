import { faHome, faList, faShuffle } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import AllSongsInPlaylist from "../components/AllSongsInPlaylist";

const PlaylistContext = () => {
  return (
    <div className="container">
      <NavBar
        lefticonname={faHome}
        leftroute={"/"}
        righticonname={faShuffle}
        rightroute={"/"}
      />
      <Heading iconname={faList} title={playlist.title} />
      <AllSongsInPlaylist />
    </div>
  );
};

export default PlaylistContext;
