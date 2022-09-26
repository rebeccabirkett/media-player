import { React, Component } from "react";
// import { usePlaylistsContext } from "../hooks/usePlaylistsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";

class PlaylistDetails extends Component {
  constructor(props) {
    super(props);
    this.playlistsReducer = this.playlistsReducer.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      isEditMode: false,
      playlist: props.playlist,
    };
  }

  playlistsReducer = (action) => {
    switch (action.type) {
      case "SET_PLAYLISTS":
        return {
          playlists: action.payload,
        };
      case "CREATE_PLAYLIST":
        return {
          playlists: [action.payload, ...this.props.playlists],
        };
      case "DELETE_PLAYLIST":
        return {
          playlists: this.props.playlists.filter(
            (p) => p._id !== action.payload._id
          ),
        };
      case "PATCH_PLAYLIST":
        return {
          playlists: this.props.playlists.filter(
            (p) => p._id !== action.payload._id
          ),
        };
      default:
        return this.state;
    }
  };

  handleDelete() {
    fetch("api/playlists/" + this.state.playlist._id, {
      method: "DELETE",
    }).then((res) => {
      this.setState({ playlist: null });
    });
  }

  handleEdit() {
    if (this.state.isEditMode) {
      fetch("api/playlists/" + this.state.playlist._id, {
        method: "PATCH",
        body: JSON.stringify({ title: this.state.playlist.title }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => {
        this.setState({ isEditMode: false });
      });
    } else {
      this.setState({
        isEditMode: true,
      });
    }
  }

  changeTitle(e) {
    let updatedPlaylist = this.state.playlist;
    updatedPlaylist.title = e.target.value;
    this.setState({ playlist: updatedPlaylist });
  }

  render() {
    if (!this.state.playlist) {
      return <div></div>;
    }
    return (
      <div>
        <div className="playlist-details">
          <h4>
            {this.state.isEditMode && (
              <input
                name="editLabel"
                value={this.state.playlist.title}
                onChange={(e) => this.changeTitle(e)}
                type="text"
              />
            )}
            {!this.state.isEditMode && `${this.state.playlist.title}`}
          </h4>
          <div className="playlist-btns">
            {this.state.isEditMode && (
              <>
                <button onClick={this.handleEdit}>
                  <FontAwesomeIcon icon={faSave} />
                </button>
                <button onClick={this.handleDelete}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </>
            )}
            {!this.state.isEditMode && (
              <button onClick={this.handleEdit}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDetails;
