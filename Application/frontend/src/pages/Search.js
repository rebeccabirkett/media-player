import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import AllSongs from "../components/AllSongs";

const Search = () => {
  return (
    <div className="container">
      <NavBar />
      <Heading iconname={faMagnifyingGlass} title={"Search"} />
      <AllSongs />
    </div>
  );
};

export default Search;
