import { React, Component } from "react";
import { withRouter } from "react-router-dom";
// components
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player";
import {
  faHome,
  faPause,
  faPlay,
  faRepeat,
  faSearch,
  faShuffle,
  fa1,
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
      loop: false,
    };
  }

  //  button handlers
  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleShuffle = () => {
    fetch(`/api/song/`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            song: result,
            playing: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
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
    const { playing, loop } = this.state;
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
            <div className="player-controls">
              <span className="player-loop" onClick={this.handleToggleLoop}>
                {loop ? (
                  <FontAwesomeIcon icon={fa1} />
                ) : (
                  <FontAwesomeIcon icon={faRepeat} />
                )}
              </span>
              <span className="player-play" onClick={this.handlePlayPause}>
                {playing ? (
                  <FontAwesomeIcon icon={faPause} size="2x" />
                ) : (
                  <FontAwesomeIcon icon={faPlay} size="2x" />
                )}
              </span>
              <span className="player-shuffle" onClick={this.handleShuffle}>
                <FontAwesomeIcon icon={faShuffle} />
              </span>
            </div>
          </div>
          <ReactPlayer
            url={musicFile}
            playing={playing}
            onSeek={(e) => console.log("onSeek", e)}
            loop={loop}
            // onError={console.log("react player error", this)}
            // controls
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(MusicPlayer);
