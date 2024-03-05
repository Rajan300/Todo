import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const[currentTask,setCurrentTask] = useState("")
  const inputTask=useRef(null);

  const addTask=()=>{
    setTodoList([...todoList,currentTask])
     inputTask.current.value=""
     setCurrentTask("")
  };

  const deleteTask=(itemstodelete)=>{
   setTodoList(todoList.filter((task)=>{
     return task !== itemstodelete
   }))
  }
   


  return (
    <div className="App">
      <h1>Todo List</h1>
    <div>
    <input ref={inputTask} type="text" placeholder="Task" onChange={(event)=>{setCurrentTask(event.target.value)}}/>

    <button onClick={addTask}>AddTask</button>
    </div>
    <hr />
    <ul>
     {todoList.map((value,key)=>{
      return (
        <div id="t">

      
        <li key={key}>{value}</li>
        <button onClick={()=>deleteTask(value)}>X</button>
        </div>
      )
     })}
    </ul>
    </div>
  )
}

export default App
