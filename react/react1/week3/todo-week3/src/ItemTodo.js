import { useState } from "react";
import "./App.css";
// Item component
const ItemTodo = ({ item, deadline, deleteTodo ,id}) => {
  const [className, setClassName] = useState("unchecked");
  const [edit, setEdit] = useState("edit");

  const deleteItem = () =>deleteTodo(id);
  
  const editItem =()=>{return setEdit("update")
  // editItem(id)
};

  function changeClassName() {
    setClassName((prev) => {
    //  return  prev = "unchecked"?"checked":"unchecked";
      if (prev === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  }

  return (
    <li>
      <label htmlFor="description" className={className}>
        {item} | {deadline}
      </label>
      <input id="description" type="checkbox" onChange={changeClassName} />
      <button onClick={deleteItem}>delete</button>
      <button onClick={editItem}>{edit}</button>
    </li>
  );
};
export default ItemTodo;
