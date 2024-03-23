import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

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
    const newTodo = userInput;
    setTodos((previousTodos) => [...previousTodos, newTodo]);
    setUserInput("");
  }

  function handleRemoveButtonClick(event) {
    const currentListElement = event.target;
    setTodos(todos.filter());
    //filter out the current list element and render the rest of the todos
    //look up how the filter method works
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your first to do"
          value={userInput}
          onChange={handleUserInputChange}
        />
        <button>Add</button>
      </form>
      {todos.map((userInput, index) => (
        <div className="container" key={index}>
          <li>{userInput}</li>
          <button onClick={(event) => handleRemoveButtonClick(event)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
