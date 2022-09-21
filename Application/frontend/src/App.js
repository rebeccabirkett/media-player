import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";
import MusicPlayer from "./pages/MusicPlayer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/player" element={<MusicPlayer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
