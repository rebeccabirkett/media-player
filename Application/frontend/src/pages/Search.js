import {
  faHome,
  faMagnifyingGlass,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import SearchBar from "../components/SearchBar";
import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }
  render() {
    return (
      <div className="container">
        <NavBar lefticonname={faHome} leftroute={"/"} />
        <Heading iconname={faMagnifyingGlass} title={"Search"} />
        <SearchBar />
      </div>
    );
  }
}
export default Search;
