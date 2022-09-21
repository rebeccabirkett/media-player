import { faMusic } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import Heading from "../components/Heading";

const Songs = () => {
  return (
    <div className="container">
      <NavBar />
      <Heading iconname={faMusic} title={"All Songs"} />
    </div>
  );
};

export default Songs;
