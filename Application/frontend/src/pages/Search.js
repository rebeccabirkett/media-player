import {
  faHome,
  faMagnifyingGlass,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import AllSongs from "../components/AllSongs";

const Search = () => {
  return (
    <div className="container">
      <NavBar
        lefticonname={faHome}
        leftroute={"/"}
        righticonname={faShuffle}
        rightroute={"/"}
      />
      <Heading iconname={faMagnifyingGlass} title={"Search"} />
      <AllSongs />
    </div>
  );
};

export default Search;
