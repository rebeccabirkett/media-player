import { usePlaylistsContext } from "../hooks/usePlaylistsContext";

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
      <span onClick={handleClick}>delete</span>
    </div>
  );
};

export default PlaylistDetails;
