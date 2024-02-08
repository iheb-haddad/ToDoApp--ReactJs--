import React from 'react'
import { InputBarr, List } from './components';

const App = () => {
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
    <div className='container'>
      <div className='sub-container'>
        <InputBarr handleAddTask={handleAddTask} form={form} setForm={setForm}/>
        <List tasks={tasks} handleDone={handleDone} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </div> 
    </div>
  )
}

export default App