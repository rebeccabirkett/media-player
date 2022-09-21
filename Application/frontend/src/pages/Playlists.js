import { useEffect, useState } from "react";
import { faList } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import PlaylistDetails from "../components/PlaylistDetails";

const Playlists = () => {
  const [playlists, setPlaylists] = useState(null);
  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch("/api/playlists");
      const json = await response.json();

      if (response.ok) {
        setPlaylists(json);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="container">
      <NavBar />
      <Heading iconname={faList} title={"My Playlists"} />
      <div className="playlists">
        {playlists &&
          playlists.map((playlist) => (
            <PlaylistDetails key={playlist._id} playlist={playlist} />
          ))}
      </div>
    </div>
  );
};

export default Playlists;
