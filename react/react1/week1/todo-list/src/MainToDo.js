import { TodoList } from "./TodoList";


export function MainToDo(props) {
    return (
        <div>
            <h3>
            Todo List
            </h3>
            <TodoList TodoData = {props.TodoData}/>
        </div>
    )
}