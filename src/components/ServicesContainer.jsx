import "../css/main.css";
import PropTypes from "prop-types";

export default function ServicesContainer(props) {
  return (
    <div className="bd services-container">
      ServicesContainer
      <div className="services-list">
        {props.children}
      </div>
    </div>
  );
}

ServicesContainer.propTypes = {
  children: PropTypes.string,
};
