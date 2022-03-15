import {TodoItems} from "./TodoItems";
import React from "react";
export function TodoList(props) {
    return (
        <ul>
           {props.TodoData.map((Data) => {
        return <TodoItems description={Data.description} deadline={Data.deadline} key={Data.id} />;
      })}
        </ul>
    )
}