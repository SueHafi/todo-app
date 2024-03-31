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

  function handleCheckboxClick(event, index) {
    // const newTodos = todos.map((todo)=> {
    //   // const copiedTodo = Object.assign({},todo);
    //   const copiedTodo = {...todo};
    //   return copiedTodo;
    // });

    const newTodos = JSON.parse(JSON.stringify(todos));
    newTodos[index].isChecked = event.target.checked;
    setTodos(newTodos);
  }

  console.log(todos);

  return (
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
          <div className="todos-container">
            <div className="todos-checkbox-container">
              <input
                checked={todos[index].isChecked}
                className="checkbox"
                type="checkbox"
                onChange={(event) => handleCheckboxClick(event, index)}
              />
              <span className={"fuzzy-bubbles-regular" +`${todo.isChecked ? " line-through-text" : ""}`}>
                {todo.text}
              </span>
            </div>
            <button
              className="btn--delete"
              onClick={() => handleDeleteButtonClick(index)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default App;
