import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heading = ({ iconname, title }) => {
  return (
    <div className="heading">
      <FontAwesomeIcon icon={iconname} size="1.5x" className="headicon" />
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
