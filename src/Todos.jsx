import React from 'react'
import Todo from './Todo'

const Todos = ({todos , removeTodo , toggleCompleted }) => {
  return (
    <div>{todos.map((todo)=>{
        return(
            <Todo {...todo} key={todo.id} removeTodo={removeTodo} toggleCompleted={toggleCompleted}/>
        )
    })}</div>
  )
}

export default Todos