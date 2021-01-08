import React from "react";

function Form({setInputText, setTodos, todos, inputText, setStatus}) {
    const inputTextHandler = (e) => {
        console.log(e.target.value)
        setInputText(e.target.value)
    }

    const SubmitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 9999}
        ])
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
  return (
    <div>
      <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="input" />
        <button onClick={SubmitTodoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
