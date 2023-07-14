import { useState } from "react"

export function TaskForm(props) {
    const [newTask, setNewTask] = useState("")

    return <form onSubmit={() => props.insertTaskFunc(newTask)} className="new-item-form">
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