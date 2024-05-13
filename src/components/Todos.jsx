import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditedText(text);
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditedText("");
  };

  const handleUpdateTodo = () => {
    if (editedText.trim() === "") {
      return; // Prevent empty todo
    }
    dispatch(
      updateTodo({
        id: editId,
        changes: {
          // Corrected typo and added a comma here
          text: editedText, // Update the text property
        },
      })
    );
    setEditId(null);
    setEditedText("");
  };

  return (
    <div className="p-10 w-full">
      <h1 className="text-3xl font-bold">TODOS</h1>
      <div className="p-2 ">
        {todos.length === 0 && (
          <div className="text-xl text-gray-400">No Todos</div>
        )}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex gap-4 bg-gray-500 mb-1   p-2">
              {editId === todo.id ? (
                // Render input field in edit mode
                <>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="p-2 w-full border border-black"
                  />
                  <button onClick={handleUpdateTodo}>Update</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                // Render todo text and edit button
                <>
                  <h2>{todo.text}</h2>

                  <button
                    onClick={() => handleEdit(todo.id, todo.text)}
                    className="ml-auto"
                  >
                    Edit
                  </button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
