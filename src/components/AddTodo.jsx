import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (input == "") {
      setError("Please enter text");
    } else {
      dispatch(addTodo(input));
      setError("");
      setInput("");
      console.log("New todo Added");
    }
  };

  return (
    <div className="p-10 w-full">
      <form onSubmit={handleAddTodo} className="flex">
        <input
          type="text"
          placeholder="Enter text.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 w-full border border-black border-r-0 focus:outline-none"
        />

        <button
          type="submit"
          className="bg-blue-400 text-white font-bold  rounded-sm  border border-black border-l-0"
        >
          Add Todo
        </button>
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default AddTodo;
