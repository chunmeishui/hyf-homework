import React, { useState } from "react";

export function TodoItem({ description, deleteItem, id }) {
  const [className, setClassName] = useState("unchecked");
  function changeStyle() {
    setClassName((prev) => {
      if (prev === "unchecked") {
        return "checked";
      } else {
        return "unchecked";
      }
    });
  }
  function deletetodo() {
    deleteItem(id);
  }
  return (
    <div>
      <label htmlFor="item" className={className}>
        {description}{" "}
      </label>
      <input id="item" type="checkbox" onChange={changeStyle}></input>
      <button onClick={deletetodo}>delete</button>
    </div>
  );
}
