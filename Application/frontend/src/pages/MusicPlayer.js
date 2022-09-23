import { React, Component } from "react";
import { withRouter } from "react-router-dom";
// components
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player";
import {
  faHome,
  faPause,
  faPlay,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      song: {},
      playing: true,
      played: 0,
    };
  }

  //  button handlers
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  componentDidMount() {
    const { id } = this.props.match.params; //();
    fetch(`/api/songs/${id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            song: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    console.debug("song: ", this.props.song);
    const { playing } = this.state;
    const musicFile = `/musicfiles/${this.state.song.filename}`;
    if (this.state.isLoaded && this.state.song) {
      return (
        <div className="container">
          <NavBar
            lefticonname={faHome}
            leftroute={"/"}
            righticonname={faSearch}
            rightroute={"/search"}
          />
          <div className="player">
            <div className="player-album-art" />
            <div className="player-song-info">
              <p className="player-title">{this.state.song.title}</p>
              <p className="player-artist-album">
                {this.state.song.artist} | {this.state.song.album}
              </p>
            </div>
            <button className="player-play" onClick={this.handlePlayPause}>
              {playing ? (
                <FontAwesomeIcon icon={faPause} />
              ) : (
                <FontAwesomeIcon icon={faPlay} />
              )}
            </button>
          </div>
          <ReactPlayer
            url={musicFile}
            playing={playing}
            onSeek={(e) => console.log("onSeek", e)}
            onError={console.log("react player error", this)}
            controls
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(MusicPlayer);
