import "./App.css";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [userInput, setUserInput] = useState("");

  function handleUserInputChange(event) {
    const newUserInput = event.target.value;
    setUserInput(newUserInput);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <input placeholder="Type your first to do" value={userInput} onChange={handleUserInputChange}/>
        <button>Add</button>
        <button>Remove</button>
        <li>{userInput}</li>
      </form>
    </>
  );
}

export default App;
