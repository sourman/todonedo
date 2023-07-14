export function TaskList({ tasks, toggleDone, deleteTask }) {
    return <ul className="list">
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
}