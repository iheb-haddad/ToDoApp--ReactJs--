import React from 'react'
import './InputBarr.css'
const InputBarr = (props) => {
  return (
    <div className="barr">
        <form onSubmit={props.handleAddTask}>
            Task :
            <input ref={props.inputRef} type="text" placeholder="Enter new task" value={props.form} onChange={(e)=> props.setForm(e.target.value)} />
        </form>
        <button type="submit" onClick={props.handleAddTask}>Add Task</button>
    </div>
  )
}

export default InputBarr