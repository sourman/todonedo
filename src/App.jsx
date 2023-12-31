import { useState } from "react"
import { TaskForm } from "./TaskForm"
import { TaskList } from "./TaskList"
import "./styles.css"


export default function App() {
  const [tasks, setTasks] = useState([])

  function insertTask(task) {
    setTasks(oldTasks => {
    return [
        ...oldTasks,
        {id: crypto.randomUUID(),
        title: task,
        completed: false},
    ]
    })
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
  <TaskForm insertTaskFunc={insertTask} />
  <h1 className="header">Task List</h1>
  <h3 className="">
  {tasks.length === 0 && "No Tasks Added Yet"}
  </h3>
  <TaskList tasks={tasks} toggleDone={toggleDone} deleteTask={deleteTask}/>
  </>
}
