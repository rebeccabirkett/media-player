import { BrowserRouter as Router, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  return (
    <div className="App">
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
          <Route exact path="/player/:id">
            <MusicPlayer />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
