import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    const saveLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>Zach's ToDo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
