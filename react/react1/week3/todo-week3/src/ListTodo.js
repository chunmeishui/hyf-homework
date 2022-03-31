import { useState} from "react";
import ItemTodo from "./ItemTodo";
import { FancyBorder } from "./FancyBorder";
export function ListTodo() {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todoData, setTodoData] = useState([]);
  const addId = todoData.length + 1;
  const addTodo = () =>
    setTodoData((prev)=>[...prev, { description, deadline, addId }]);

  const deleteTodo = (id) => {
    setTodoData((prev) => prev.filter((todo) => todo.addId !== id));
  };

  
  const editItem = (id) => {
  
  };

  const todoItem = todoData.map((item) => {

    return (
      <FancyBorder>
        <ItemTodo
          item={item.description}
          deadline={item.deadline}
          deleteTodo={deleteTodo}
          editItem={editItem}
          key={item.addId}
          id={item.addId}
        />
      </FancyBorder>
    );
  });

  if (todoData.length === 0) {
    return (
      <div>
        <div>
          <label htmlFor="description">Todo description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="deadline"> Deadline </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={addTodo}> Add todo</button>
          <span>No items</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <label htmlFor="description">Todo description</label>
          <input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="deadline"> Deadline </label>
          <input
            id="deadline"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={addTodo}> Add todo</button>
        </div>
        <ul>{todoItem}</ul>
      </div>
    );
  }
}
