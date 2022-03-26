import { TodoItem } from "./TodoItem";
import React from "react";

export function TodoList(props) {
  return (
    <ul>
      {props.TodoData.map((Data) => {
        const todoItem = (
          <TodoItem
            description={Data.description}
            deadline={Data.deadline}
            key={Data.id}
          />
        );
        return todoItem;
      })}
    </ul>
  );
}
