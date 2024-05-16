import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import { useState } from 'react';
import Todos from './Todos';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "Find Good watlz in Am", completed: false },
]);

 const addTodo = (newTodo) =>{
    setTodos((prevState) => [...prevState, newTodo])
 }

 const removeTodo = (id) =>{
  setTodos((prevState) => prevState.filter((todo)=> todo.id !== id) )
 }


 const toggleCompleted = (id) =>{
     setTodos((prevState)=>{
      return prevState.map((todo)=>{
         if(todo.id === id){
          return  {...todo, completed : !todo.completed}
         }else{
          return todo;
         }
      })
     })
 }
  return (
    <div className="container">
     <h1 className='main-title'>To do list</h1>
     <TodoForm addTodo={addTodo} />    

     <Todos todos={todos} removeTodo = {removeTodo} toggleCompleted={toggleCompleted}/>
    </div>
  );
}

export default App;
