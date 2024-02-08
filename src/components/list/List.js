
import "./List.css"
function List(props){
return (
    <>
    <div className="list">
        <div className="list-title">
        <h2>List Of Tasks</h2>
        </div>
        <div className="list-body">
            {props.tasks.map((task,index)=>(
            <div className="task">
                <h3  style={{ textDecoration: task.done && 'line-through', color: task.done && "grey" }}>{task.text}</h3>
                    <img src="./img/check-box.png" alt="done" onClick={()=>props.handleDone(index)} style={{ width: task.done && '0rem' }}></img>
                    <img src="./img/pen.png" alt="edit" onClick={()=>props.handleEdit(task.text,index) } style={{ width: task.done && '0rem' }}></img>
                    <img src="./img/trash.png" alt="delete" onClick={()=>props.handleDelete(index)}></img>
            </div>
            ))}
        </div>
    </div>
    </>
    )
}

export default List

