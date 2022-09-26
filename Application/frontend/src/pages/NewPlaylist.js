import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHome, faPlus } from "@fortawesome/free-solid-svg-icons";
import { usePlaylistsContext } from "../hooks/usePlaylistsContext";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import AllSongs from "../components/AllSongs";

const NewPlaylist = () => {
  const { dispatch } = usePlaylistsContext();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playlist = { title };

    const response = await fetch("/api/playlists", {
      method: "POST",
      body: JSON.stringify(playlist),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setError(null);
      console.log("new playlist added", json);
      dispatch({ type: "CREATE_PLAYLIST", payload: json });
    }
  };

  return (
    <div className="container">
      <NavBar lefticonname={faHome} leftroute={"/"} rightroute={"/"} />
      <Heading iconname={faPlus} title={"Add Playlist"} />
      <form className="create" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <AllSongs />
        <button className="confirm">
          <FontAwesomeIcon icon={faCheck} />
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default NewPlaylist;
