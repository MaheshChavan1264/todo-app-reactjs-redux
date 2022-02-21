import "./css/main.css";
import ShowTodo from "./components/ShowTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todos />
      <ShowTodo />
    </div>
  );
}

export default App;
