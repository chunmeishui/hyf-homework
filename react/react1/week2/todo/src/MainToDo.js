import { TimeOnPage } from "./TimeOnPage";
import ToDoList from "./TodoList";
export function MainToDo() {
  return (
    <div>
      <h1>ToDolist</h1>
      <TimeOnPage />
      <ToDoList />
    </div>
  );
}
