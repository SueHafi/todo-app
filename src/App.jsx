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

  function handleDeleteButtonClick(indexToDelete) {
    const filteredTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(filteredTodos);
  }

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
      {todos.map((userInput, index) => (
        <li className="container" key={index}>
          <input className='checkbox' type='checkbox'/>
          {userInput}
          <button className='btn--delete' onClick={() => handleDeleteButtonClick(index)}>Delete</button>
        </li>
      ))}
    </>
  );
}

export default App;
