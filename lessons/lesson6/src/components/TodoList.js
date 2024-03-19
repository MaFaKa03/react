import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilterContext } from "../contexts/filterContext";
import withFilter from "../hoc/withFilter";
import { removeTodo, toggleTodo } from "../actions/todoActions";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const { filter } = useContext(FilterContext);

  const filteredTodos = withFilter(todos, filter);

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }
  function handleRemoveTodo(id, e) {
    e.preventDefault();
    dispatch(removeTodo(id));
  }
  return (
    <ul>
      {filteredTodos.map((todo) => (
        <>
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
          <button onClick={(e) => handleRemoveTodo(todo.id, e)}>Remove</button>
        </>
      ))}
    </ul>
  );
}

export default TodoList;
