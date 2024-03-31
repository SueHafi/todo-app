import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Header from "./components/Header";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([
    { text: "Example todo: Add another todo", isChecked: true, id: uuidv4() },
    { text: "Example todo: Do homework", isChecked: false, id: uuidv4() },
  ]);

  function handleUserInputChange(event) {
    const newUserInput = event.target.value;
    setUserInput(newUserInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (userInput === "") {
      return;
    }
    setTodos((previousTodos) => [
      ...previousTodos,
      { text: userInput, isChecked: false, id: uuidv4() },
    ]);
    setUserInput("");
  }

  function handleDeleteButtonClick(indexToDelete) {
    const filteredTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(filteredTodos);
  }

  function handleCheckboxClick(event, index) {
    const newTodos = todos.map((todo) => {
      const copiedTodo = Object.assign({}, todo);
      return copiedTodo;
    });
    newTodos[index].isChecked = event.target.checked;
    setTodos(newTodos);
  }

  return (
    <>
      <div className="container">
        <Header />
        <form className="todo-input-container" onSubmit={handleSubmit}>
          <input
            className="user-input-box"
            type="text"
            placeholder="Type your first to do"
            value={userInput}
            onChange={handleUserInputChange}
          />
          <button className="btn--add">Add</button>
        </form>
        {todos.map((todo, index) => (
          <li className="todos-li" key={todo.id}>
            <input
              checked={todos[index].isChecked}
              className="checkbox"
              type="checkbox"
              onChange={(event) => handleCheckboxClick(event, index)}
            />
            <span
              className={
                "todo-text" + `${todo.isChecked ? " line-through-text" : ""}`
              }
            >
              {todo.text}
            </span>
            <button
              className="btn--delete"
              onClick={() => handleDeleteButtonClick(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
      <footer className="footer">
        <p>
          &copy; 2023 Sue Hafizoglu | See code at{" "}
          <a className="github-link" href="#">
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
