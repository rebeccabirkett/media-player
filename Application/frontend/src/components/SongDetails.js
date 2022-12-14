import { Component } from "react";
import { Link } from "react-router-dom";

class SongDetails extends Component {
  render() {
    const href = `/player/${this.props.song._id}`;
    console.debug("song: ", this.props.song);

    return (
      <Link to={href} className="button">
        <div className="album-art">{this.props.song.image}</div>
        <div className="button-column">
          <p className="title">{this.props.song.title}</p>
          <p>{this.props.song.artist}</p>
        </div>
      </Link>
    );
  }
}

export default SongDetails;
