import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [todoList, setTodolist] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  const addTodoHandler = () => {
    if (enteredText === "") return;
    setTodolist(
      todoList.concat({
        id: Math.random().toString(),
        text: enteredText,
      })
    );
    setEnteredText("");
  };
  const addInputTodoHandler = (e) => {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  };
  const deleteHandler = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodolist(newList);
  };
  const editHandler = (id, text) => {
    console.log(text);
    setTodolist(
      todoList.map((item) => {
        if (item.id === id) {
          item.text = text;
        }
        return item;
      })
    );
  };
  return (
    <div>
      <h2>What's the Plan for Today</h2>
      <input
        className="input"
        onChange={(e) => {
          setEnteredText(e.target.value);
        }}
        onKeyDown={addInputTodoHandler}
        value={enteredText}
        type="text"
        placeholder="Add a todo"
      />
      <button className="btn" onClick={addTodoHandler}>
        Add Todo
      </button>
      <TodoList
        list={todoList}
        deleteItem={deleteHandler}
        editItem={editHandler}
      />
    </div>
  );
}

export default Todo;
