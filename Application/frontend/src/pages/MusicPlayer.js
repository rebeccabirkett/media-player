import { React, Component } from "react";
import { withRouter } from "react-router-dom";
// components
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
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
    const { playing } = this.state;
    const musicFile = `/musicfiles/${this.state.song.filename}`;
    if (this.state.isLoaded && this.state.song) {
      return (
        <div className="container">
          <NavBar />
          <button onClick={this.handlePlayPause}>
            {playing ? (
              <FontAwesomeIcon icon={faPause} />
            ) : (
              <FontAwesomeIcon icon={faPlay} />
            )}
          </button>
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
