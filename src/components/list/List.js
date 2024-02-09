import "./List.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil , faCircleCheck , faTrash } from '@fortawesome/free-solid-svg-icons'
function List(props){
        
      const handleDelete = (id) => {
          props.setTasks(props.tasks.filter((task)=> task.id!==id))
          props.setForm('')
          props.setTaskEdited('')
      }

      const handleEdit = (task) => {
              props.setForm(task.text);
              props.inputRef.current.focus()
              props.setTaskEdited(task.id)
      }
  
      const handleDone = (id) => {
        props.setTasks(props.tasks.map((task)=> task.id===id ? {...task,done : !task.done} : task))
        props.setForm('')
        props.setTaskEdited('')
      }

return (
    <div className="list">
        <div className="list-title">
            <h2>List Of Tasks</h2>
        </div>
        <div className="list-body">
            { props.tasks.length === 0  && <h3>Waiting for your first task</h3>}
            {props.tasks.map((task)=>(
            <div className="task" key={task.id}>
                <h3  className = { task.done ? 'taskDone' : props.taskEdited === task.id ? 'taskEdited' : ''} >{task.text}</h3>
                { !task.done ?
                    <div className="icons">
                        <FontAwesomeIcon icon={faCircleCheck} onClick={()=>handleDone(task.id)} className="icon" style={{color : "green"}}/>
                        <FontAwesomeIcon icon={faPencil} onClick={()=>handleEdit(task) } className="icon" style={{color : 'blue'}}/> 
                        <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(task.id)} className="icon" style={{color : 'red'}}/>
                    </div>
                    : <FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(task.id)} className="icon" style={{color : 'red'}}/>
                    }    
            </div>
            ))}
        </div>
    </div>
    )
}

export default List

