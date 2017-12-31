import React from "react";
import PropTypes from "prop-types";
import { CollectionItem } from "react-materialize";

const Todo = ({ onClick, completed, text }) => (
  <CollectionItem
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    <h5>{text}</h5>
  </CollectionItem>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
