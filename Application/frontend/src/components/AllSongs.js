import { useEffect, useState } from "react";

import SongDetails from "../components/SongDetails";

const AllSongs = () => {
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
    <div className="songs">
      {songs && songs.map((song) => <SongDetails key={song._id} song={song} />)}
    </div>
  );
};

export default AllSongs;
