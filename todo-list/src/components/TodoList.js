import React from "react";
import Todo from "./Todo.js";

function TodoList({ todos, setTodos, filteredTodos }) {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            todos={todos}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
