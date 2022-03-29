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
// main function
function TodoList() {
  const [usetodo, setUsetodo] = useState(todos);
  // add todo function
  const addTodo = () => {
    const randomIndex = Math.floor(Math.random() * usetodo.length);
    const addId = usetodo.length + 1;
    const randomTodo = { id: addId, ...addTodos[randomIndex] };
    const addedTodo = setUsetodo((prev) => [...prev, randomTodo]);
    return addedTodo;
  };
  //delete funtion
  const deleteItem = (id) => {
    setUsetodo((prev) => prev.filter((todo) => todo.id !== id));
  };
  // from list parent to child item component
  const TodoItema = usetodo.map((todo) => {
    return (
      <TodoItem
        description={todo.description}
        key={todo.id}
        //transfer id to todoitem
        id={todo.id}
        // transfer deleteitem function to todoitem
        deleteItem={deleteItem}
      ></TodoItem>
    );
  });
//method 1
 return (usetodo.length === 0) ?(
    <div>
      <button onClick={addTodo}>Add to do </button>
      <span> no item left</span>
    </div>
  ): (
    <div>
      <button onClick={addTodo}>Add to do </button>
      {TodoItema}
    </div>
  );
  // method 2 to judge the display
  // if (usetodo.length === 0) {
  //   return (
  //     <div>
  //       <button onClick={addTodo}>Add to do </button>
  //       <span> no item left</span>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <button onClick={addTodo}>Add to do </button>
  //       {TodoItema}
  //     </div>
  //   );
  // }
}
export default TodoList;
