import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHome, faList } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";

const NewPlaylist = () => {
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
    }
  };

  return (
    <div className="container">
      <NavBar lefticonname={faHome} />
      <Heading iconname={faList} title={"Add Playlist"} />
      <form className="create" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button>
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </form>
    </div>
  );
};

export default NewPlaylist;
