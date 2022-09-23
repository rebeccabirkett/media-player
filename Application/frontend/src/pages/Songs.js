import { faHome, faMusic, faShuffle } from "@fortawesome/free-solid-svg-icons";

// components
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";
import AllSongs from "../components/AllSongs";

const Songs = () => {
  return (
    <div className="container">
      <NavBar
        lefticonname={faHome}
        leftroute={"/"}
        righticonname={faShuffle}
        rightroute={"/"}
      />
      <Heading iconname={faMusic} title={"All Songs"} />
      <AllSongs />
    </div>
  );
};

export default Songs;
