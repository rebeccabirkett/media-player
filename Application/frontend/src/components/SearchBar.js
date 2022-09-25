import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {
  const [searchResult, setSearchResult] = useState([]);
  const [key, setKey] = useState("");
  useEffect(() => {
    const search = async () => {
      try {
        if (!key.trim()) {
          setSearchResult([]);
          return;
        }
        const res = await axios.get("/api/songs?search=", {
          params: { key: key },
        });
        setSearchResult(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, [key]);
  return (
    <form>
      <div className="search-wrapper">
        <button className="search-btn">"search"</button>
        <div className="form-group">
          <input
            type={"text"}
            className="form-control"
            placeholder="search..."
            value={key}
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        {searchResult && searchResult.length > 0 && (
          <div className="search-result">
            {searchResult.map((song) => (
              <div className="result-item" key={song._id}>
                <button className="song-info">
                  <p className="title">{song.title}</p>
                  <p>{song.artist}</p>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </form>
  );
}
