import {
  faHome,
  faMagnifyingGlass,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";

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
      <SearchBar />
    </div>
  );
};

export default Search;
