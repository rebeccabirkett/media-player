import { React, Component } from "react";
import { withRouter } from "react-router-dom";
// components
import NavBar from "../components/NavBar";
import ReactPlayer from "react-player";

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      song: {},
    };
  }

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
    const musicFile = `/musicfiles/${this.state.song.filename}`;
    if (this.state.isLoaded && this.state.song) {
      return (
        <div className="container">
          <NavBar />
          <ReactPlayer
            url={musicFile}
            controls
            onError={console.log("react player error", this)}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default withRouter(MusicPlayer);
