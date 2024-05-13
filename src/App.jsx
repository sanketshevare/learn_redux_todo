import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <aside className="p-2">
        <h1>TODO</h1>
      </aside>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
