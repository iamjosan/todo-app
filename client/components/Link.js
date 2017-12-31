import React from "react";
import PropTypes from "prop-types";

const Link = ({ active, children, onClick }) => {
  var activeStyle;
  if (active) {
    activeStyle = "active-link";
  } else {
    activeStyle = "";
  }
  return (
    <li>
      <a
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        className={activeStyle}
      >
        {children}
      </a>
    </li>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
