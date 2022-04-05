import React, { useState } from "react";
//{ description, deleteItem, id } is from the parent todolist component
export function TodoItem({ description, deleteItem, id }) {
  // change the className
  const [className, setClassName] = useState("unchecked");
  
  function changeStyle() {
    setClassName((prev) => {
      //{prev = "unchecked"?"unchecked":"checked"} ;
      if (prev === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  }
  // call the delete function from parent todolist component
  const onItemDeleted = () => deleteItem(id);
  return (
    <div>
      <label htmlFor="item" className={className}>
        {description}{" "}
      </label>
      <input id="item" type="checkbox" onChange={changeStyle}></input>

      <button onClick={onItemDeleted}>delete</button>
    </div>
  );
}
 //method 2 to judge wether is was checked or not?

// const [isDone, setIsDone] = useState(false);
// const className = isDone ? 'checked' : 'unchecked';

// function onDoneChanged() {
//   setIsDone(!isDone);
// }

// ...

// <input type="checkbox" checked={isDone} onChange={onDoneChanged} />