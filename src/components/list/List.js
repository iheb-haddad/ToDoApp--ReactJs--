import React ,{useState,useRef,useEffect}from 'react'
import "./List.css"
function List(){
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [{ text: "waiting for your first task", state: "empty" }];
      });
        const [form, setForm] = useState('')
        const input = useRef()

        const handleAddTask = (event,index) => {
        event.preventDefault();

        tasks[0].state==="empty"?
            form && setTasks([{
                text: form,
                done: false
            }])
        :
        form && setTasks([...tasks,
            {
                text: form,
                done: false
            }])
        setForm('')
        }
        const handleDelete = (index) => {
            const temp = [...tasks]
            temp.splice(index,1)
            temp.length === 0 ? 
                setTasks([{text:"waiting for your first task",
                state:"empty"}])
                :
                    setTasks(temp)
        }
        const handleEdit = (text,index) => {
            if (text !== "waiting for your first task") {
                setForm(text);
                input.current.focus()
                handleDelete(index)
            }

        }
        const handleDone = (index) => {
            if (tasks[index].text !== "waiting for your first task") {
            const temp = [...tasks]
            temp[index].done=true
            setTasks(temp)
            }
        }

        useEffect(() => {
            localStorage.setItem("tasks", JSON.stringify(tasks));
          }, [tasks]);



return (
    <>
    <div className="barr">
        <form onSubmit={handleAddTask}>
            Task :
            <input ref={input} type="text" placeholder="Enter new task" value={form} onChange={(e)=> setForm(e.target.value)} />
        </form>
        <button type="submit" onClick={handleAddTask}>Add Task</button>
    </div>
    <div className="list">
        <div className="list-title">
        <h2>List Of Tasks</h2>
        </div>
        <div className="list-body">
            {tasks.map((task,index)=>(
            <div className="task">
                <h3  style={{ textDecoration: task.done && 'line-through', color: task.done && "grey" }}>{task.text}</h3>
                    <img src="./img/check-box.png" alt="done" onClick={()=>handleDone(index)} style={{ width: task.done && '0rem' }}></img>
                    <img src="./img/pen.png" alt="edit" onClick={()=>handleEdit(task.text,index) } style={{ width: task.done && '0rem' }}></img>
                    <img src="./img/trash.png" alt="delete" onClick={()=>handleDelete(index)}></img>
            </div>
            ))}
        </div>
    </div>
    </>
    )
}

export default List

