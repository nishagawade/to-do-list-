import React from 'react'
import { ImCross } from "react-icons/im";

const Todo = ({title , completed , removeTodo , id , toggleCompleted}) => {
  return (
    <div className='todo'>
        <div className="todo-title">
            <input type="checkbox" value={completed} onChange={() => toggleCompleted(id)}/>
            <p>{ title}</p>
            <div className="cross-btn"
             onClick={() => removeTodo(id)}
             >
                <ImCross />
            </div>
        </div>
    </div>
  )
}

export default Todo