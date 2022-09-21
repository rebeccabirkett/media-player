import { useEffect, useState } from "react";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import SongDetails from "../components/SongDetails";

const Songs = () => {
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("/api/songs");
      const json = await response.json();

      if (response.ok) {
        setSongs(json);
      }
    };

    fetchSongs();
  }, []);
  return (
    <div className="container">
      <NavBar />
      <Heading iconname={faMusic} title={"All Songs"} />
      <div className="songs">
        {songs &&
          songs.map((song) => <SongDetails key={song._id} song={song} />)}
      </div>
    </div>
  );
};

export default Songs;
