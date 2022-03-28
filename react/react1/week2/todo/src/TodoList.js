import { useState } from "react";
import React from "react";
import { TodoItem } from "./TodoItem";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];
const addTodos = [
  { description: "dress well" },
  { description: "go to school" },
  { description: "study hard" },
  { description: "Eat lunch" },
  { description: "do sports" },
  { description: "back home" },
];

function TodoList() {
  const [usetodo, setUsetodo] = useState(todos);
  const addTodo = () => {
    const randomIndex = Math.floor(Math.random() * usetodo.length);
    const addId = usetodo.length + 1;
    const randomTodo = { id: addId, ...addTodos[randomIndex] };
    const addedTodo = setUsetodo((prev) => [...prev, randomTodo]);
    return addedTodo;
  };

  const deleteItem = (id) => {
    setUsetodo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const TodoItema = usetodo.map((todo) => {
    return (
      <TodoItem
        description={todo.description}
        key={todo.id}
        id={todo.id}
        deleteItem={deleteItem}
      ></TodoItem>
    );
  });

  if (usetodo.length === 0) {
    return (
      <div>
        <button onClick={addTodo}>Add to do </button>
        <span> no item left</span>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={addTodo}>Add to do </button>
        {TodoItema}
      </div>
    );
  }
}
export default TodoList;
