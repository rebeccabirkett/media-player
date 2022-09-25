import { usePlaylistsContext } from "../hooks/usePlaylistsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PlaylistDetails = ({ playlist }) => {
  const { dispatch } = usePlaylistsContext();

  const handleClick = async () => {
    const response = await fetch("api/playlists/" + playlist._id, {
      method: "DELETE",
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLAYLIST", payload: json });
    }
  };

  return (
    <div className="playlist-details">
      <h4>{playlist.title}</h4>
      <span onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
    </div>
  );
};

export default PlaylistDetails;
