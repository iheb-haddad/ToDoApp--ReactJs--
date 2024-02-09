import React from 'react'
import './InputBarr.css'
const InputBarr = (props) => {
    const handleAddTask = (event) => {
      event.preventDefault();
      if(props.taskEdited === '' ){
          props.form && props.setTasks([...props.tasks,
              {
                  id : Math.floor(Math.random()*1000),
                  text: props.form,
                  done: false
              }])
      }else{
          props.form && props.setTasks([...props.tasks.map((task)=> task.id === props.taskEdited ? {...task,text: props.form} : task)])
          props.setTaskEdited('')
      }
      props.setForm('')
    }
  return (
    <div className="barr">
        <form onSubmit={handleAddTask}>
            Task :
            <input ref={props.inputRef} type="text" placeholder="Enter new task" value={props.form} onChange={(e)=> props.setForm(e.target.value)} />
        </form>
        <button type="submit" onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default InputBarr