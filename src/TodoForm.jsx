import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newToDo = {
            title : title,
             id : uuid,
            completed : false
        }

        addTodo(newToDo)
        setTitle("")
    }
    return (
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type='text'
                className="todoForm__input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="todoForm__btn">
                Add
            </button>
        </form>
    )
}

export default TodoForm