import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import Header from "./components/Header";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

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

  // need a deep copy
  function handleCheckboxClick(event, index) {
    const newTodos = [...todos];
    newTodos[index].isChecked = event.target.checked;
    setTodos(newTodos);
  }

  console.log(todos);

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your first to do"
          value={userInput}
          onChange={handleUserInputChange}
        />
        <button>Add</button>
      </form>
      {todos.map((todo, index) => (
        <li className="container" key={todo.id}>
          <input
            checked={todos[index].isChecked}
            className="checkbox"
            type="checkbox"
            onChange={(event) => handleCheckboxClick(event, index)}
          />
          <span className={todo.isChecked ? "line-through-text" : ""}>
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
    </>
  );
}

export default App;
