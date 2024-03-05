import { useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const[currentTask,setCurrentTask] = useState("")
  const inputTask=useRef(null);

  const addTask=()=>{
    setTodoList([...todoList,{task:currentTask,completed:false}]);
     inputTask.current.value=""
     setCurrentTask("")
  };

  const deleteTask=(itemstodelete)=>{
   setTodoList(todoList.filter((task)=>{
     return task.task !== itemstodelete
   }))
  }

  const completeTask=(tasktoComplete)=>{
    setTodoList(todoList.map((task)=>{
      return task.task == tasktoComplete ?{task:tasktoComplete,completed:true}:{task:tasktoComplete,completed:task.completed ? true : false}
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

      
        <li key={key}>{value.task}</li>
        <button onClick={()=>completeTask(value.task)}>Completed</button>
        <button onClick={()=>deleteTask(value.task)}>X</button>
        {value.completed ?(<h1>TaskCompleted</h1>):(<h1>TasknotCompleted</h1>)}
        
        </div>
      )
     })}
    </ul>
    </div>
  )
}

export default App
