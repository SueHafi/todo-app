import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <form>
        <input placeholder="Type your first to do"/>
        <button>Add</button>
        <button>Remove</button>
      </form>
    </>
  );
}

export default App;
