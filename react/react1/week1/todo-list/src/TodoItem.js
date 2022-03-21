import React from "react"

export function TodoItem(props){
    return(
      <li>
          <h4>
         {props.description} ,{props.deadline}
         </h4>
      </li>

    )
}