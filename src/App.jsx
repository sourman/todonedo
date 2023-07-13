import { useState } from "react"
import { TaskForm } from "./TaskForm"
import "./styles.css"


export default function App() {
  const [tasks, setTasks] = useState([])

  function insertTask(e) {
    e.preventDefault() /** Prevent page refresh on submit */
    setTasks(oldTasks => {
    return [
        ...oldTasks,
        {id: crypto.randomUUID(),
        title: newTask,
        completed: false},
    ]
    })
    setNewTask("")
}

  function deleteTask(id) {
    setTasks(oldTasks => {
      return oldTasks.filter(task => task.id !== id)
    })
  }

  function toggleDone(id, completed) {
    setTasks(oldTasks => {
      return oldTasks.map(task => {
      if(task.id === id)
        return {...task, completed}
      else return task
    })
  })
  }

  return <>
  <TaskForm insetTaskFunc={insertTask} />
  <h1 className="header">Task List</h1>
  <h3 className="">
  {tasks.length === 0 && "No Tasks Added Yet"}
  </h3>
  <ul className="list">
    {tasks.map(task => {
      return <li key={task.id}>
        <label>
          <input onChange={e => toggleDone(task.id, e.target.checked)} type="checkbox" checked={task.completed}/>
          {task.title}
        </label>
        <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
      </li>
    }) }
  </ul>
  </>
}
