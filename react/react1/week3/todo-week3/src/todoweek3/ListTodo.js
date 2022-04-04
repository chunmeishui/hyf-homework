import { useState, useEffect } from "react";
import ItemTodo from "./ItemTodo";
import { FancyBorder } from "./FancyBorder";
const urlApi =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
export function ListTodo() {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todoData, setTodoData] = useState([]);

  // get the data from api and set it as origin todoData
  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => setTodoData(data));
  }, []);
  //addTodo
  const addTodo = () => {
    const id = todoData.length + 1;
    setTodoData((prev) => [...prev, { id, description, deadline }]);
  };

  //delete todoItem
  const onDeleteTodo = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.id !== id));
  };

  // edit todoitem
  // const uploadItem =(id)=>{
  //  // find the right todo by searching for something that matches updatedTodo.id
  //  const editItem = todoData.filter((data) => data.id ===id);
  //  console.log(editItem);
  //   // update the todo you found with the new description/checked/deadline value in updatedTodo
  //   // update the state of ListTodo by calling setTodoData with the new state
  // }

  const updateItem = (updatedItem) => {
    const updateMatchingItem = (todo) => {
      if (todo.id === updatedItem.id) {
        return updatedItem;
      } else {
        return todo;
      }
    };

    const updatedItems = todoData.map(updateMatchingItem);
    setTodoData(updatedItems);
  };

  const todoItem = todoData.map((item) => {
    return (
      <FancyBorder>
        <ItemTodo
          description={item.description}
          deadline={item.deadline}
          onDeleteTodo={onDeleteTodo}
          uploadItem={updateItem}
          id={item.id}
          key={item.id}
        />{" "}
      </FancyBorder>
    );
  });

  return (
    <div>
      <div>
        <label htmlFor="description"> Todo description </label>{" "}
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>{" "}
      </div>{" "}
      <div>
        <label htmlFor="deadline"> Deadline </label>{" "}
        <input
          id="deadline"
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        ></input>{" "}
      </div>{" "}
      <div>
        <button onClick={addTodo}> Add todo </button>{" "}
        {todoData.length === 0 ? (
          <span> No items </span>
        ) : (
          <ul> {todoItem} </ul>
        )}
      </div>{" "}
    </div>
  );
}
