import { useEffect, useState } from "react";

import SongDetails from "./SongDetails";

const AllSongsInPlaylist = () => {
  const [songs, setSongs] = useState(null);
  useEffect(() => {
    const fetchSongs = async () => {
      const { id } = this.props.match.params; //();
      const response = await fetch(`/api/playlists/${id}`);
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

export default AllSongsInPlaylist;
