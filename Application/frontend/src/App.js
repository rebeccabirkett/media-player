import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages and components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Songs from "./pages/Songs";
import Playlists from "./pages/Playlists";

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
