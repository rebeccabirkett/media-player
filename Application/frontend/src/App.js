import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import MusicPlayer from "./pages/MusicPlayer";
import NewPlaylist from "./pages/NewPlaylist";

export default class App extends Component {
  timer;
  constructor(props) {
    super(props);

    this.state = {
      idle: false,
      idleCount: 0,
      idleThreshold: 30000,
    };

    this.resetIdleClock = this.resetIdleClock.bind(this);
  }

  idleCounter() {
    // console.log(
    //   "IdleCounter",
    //   this.state.idleCount,
    //   this.state.idle,
    //   this.timer
    // );
    if (this.state.idleCount === 0 && !this.timer) {
      this.timer = setInterval(() => {
        // console.debug("Timer", this.state.idleCount);
        if (this.state.idleCount > 0) {
          // this checks if threshhold has been reached
          this.setState({
            idle: true,
            idleCount: 0,
          });

          clearInterval(this.timer);
          this.timer = null;

          // console.log("Gone into idle mode: Clearing up", this.state.timer);
          return;
        }

        let iCount = this.state.idleCount;
        iCount++;
        this.setState({
          idleCount: iCount,
        }); // this updates the counter in state
        // console.log(iCount);
      }, 30000);
    }
  }

  resetIdleClock() {
    this.setState({
      idle: false,
      idleCount: 0,
    });

    this.idleCounter();
  }
  componentDidMount() {
    this.idleCounter();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div onClick={this.resetIdleClock}>
        <div className={this.state.idle ? "App_Hidden" : "App"}>
          <Router>
            <div className="pages">
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route exact path="/songs">
                <Songs />
              </Route>
              <Route exact path="/playlists">
                <Playlists />
              </Route>
              <Route exact path="/newplaylist">
                <NewPlaylist />
              </Route>
              <Route exact path="/player/:id">
                <MusicPlayer />
              </Route>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
