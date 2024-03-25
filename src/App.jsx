import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoCheckStatuses, setTodoCheckStatuses] = useState([]);

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
    setTodoCheckStatuses((previousChecks) => [...previousChecks, false]);
    setUserInput("");
  }

  function handleDeleteButtonClick(indexToDelete) {
    const filteredTodos = todos.filter((_, i) => i !== indexToDelete);
    setTodos(filteredTodos);
    const filteredCheckboxes = todoCheckStatuses.filter(
      (_, i) => i !== indexToDelete
    );
    setTodoCheckStatuses(filteredCheckboxes);
  }

  function handleCheckboxClick(event, index) {
    if (event.target.checked) {
      const listOfChecked = [...todoCheckStatuses];
      listOfChecked[index] = true;
      setTodoCheckStatuses(listOfChecked);
    } else {
      const listOfChecked = [...todoCheckStatuses];
      listOfChecked[index] = false;
      setTodoCheckStatuses(listOfChecked);
    }
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
      {todos.map((todo, index) => (
        <li className="container" key={todo}>
          <input
            checked={todoCheckStatuses[index]}
            className="checkbox"
            type="checkbox"
            onChange={(event) => handleCheckboxClick(event, index)}
          />
          {todo}
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
