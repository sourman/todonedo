import { useState } from "react"

export function TaskForm({ insertTaskFunc }) {
    const [newTask, setNewTask] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newTask === "") return
        insertTaskFunc(newTask)
        setNewTask("") /** Clear the new task field */
    }

    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="task">New task</label>
            <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                type="text" id="task"/>
        </div>
        <button className="btn">Add</button>
    </form>
} 