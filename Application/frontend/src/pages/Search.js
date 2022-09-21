import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="container">
      <NavBar />
      <Heading iconname={faMagnifyingGlass} title={"Search"} />
    </div>
  );
};

export default Search;
