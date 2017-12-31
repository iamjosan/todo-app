import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { Input, Button, Modal, Icon } from "react-materialize";

const todoForm = ({ dispatch }) => {
  var input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          var input = e.target.querySelector("input");
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Input type="text" placeholder="New todo">
          <Icon>add</Icon>
        </Input>
      </form>
    </div>
  );
};

const ReduxTodoForm = connect()(todoForm);

const AddTodo = () => (
  <Modal
    bottomSheet
    children={<ReduxTodoForm />}
    trigger={<Button floating large icon="add" id="add-todo-btn" />}
  />
);

export default AddTodo;
