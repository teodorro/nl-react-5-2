import "../css/main.css";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <div className="bd header">
      Header
      <div className="header-list">{props.children}</div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.string,
};
