import { combineReducers } from "redux";

function visibilityFilter(state = "SHOW_ALL", action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  let obj = {
    ADD_TODO: [
      ...state,
      {
        id: action.id,
        text: action.text,
        completed: false
      }
    ],
    TOGGLE_TODO: state.map(todo => {
      if (todo.id === action.id) {
        return Object.assign({}, todo, {
          completed: !todo.completed
        });
      }
      return todo;
    })
  };

  return obj[action.type] || state;
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
