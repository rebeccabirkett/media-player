import React, { useEffect } from "react";
import { usePlaylistsContext } from "../hooks/usePlaylistsContext";
import { faList, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import PlaylistDetails from "../components/PlaylistDetails";

const Playlists = () => {
  const { playlists, dispatch } = usePlaylistsContext();
  useEffect(() => {
    const fetchPlaylists = async () => {
      const response = await fetch("/api/playlists");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PLAYLISTS", payload: json });
      }
    };

    fetchPlaylists();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <NavBar
        lefticonname={faHome}
        leftroute={"/"}
        righticonname={faPlus}
        rightroute={"/newplaylist"}
      />
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
