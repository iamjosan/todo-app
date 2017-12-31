import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { Navbar, NavItem, Button, Input } from "react-materialize";
import FilterLink from "../containers/FilterLink";
import "./app.css";

const App = () => (
  <div>
    <Navbar brand="Todo" fixed options={{ closeOnClick: true }} right>
      <FilterLink filter="SHOW_ALL">Show All</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Show Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Show Completed</FilterLink>
    </Navbar>
    <VisibleTodoList />
    <AddTodo />
  </div>
);

export default App;
