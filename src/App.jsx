import { useState } from "react"
import "./styles.css"


export default function App() {
  const [newTask, setNewTask] = useState("")
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
  <form onSubmit={insertTask} className="new-item-form">
    <div className="form-row">
      <label htmlFor="task">New task</label>
      <input
      value={newTask}
      onChange={e => setNewTask(e.target.value)}
      type="text" id="task"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Task List</h1>
  <ul className="list">
    {tasks.map(task => {
      return <li key={task.id}>
        <label>
          <input onChange={e => toggleDone(task.id, e.target.checked)} type="checkbox" checked={task.completed}/>
          {task.title}
        </label>
        <button onClick={deleteTask} className="btn btn-danger">Delete</button>
      </li>
    }) }
  </ul>
  </>
}
