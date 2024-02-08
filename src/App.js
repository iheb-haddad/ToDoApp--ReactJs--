import React from 'react'
import { InputBarr, List } from './components';
import { useState, useEffect, useRef } from 'react'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
    const [form, setForm] = useState('')
    const inputRef = useRef()

    const handleAddTask = (event,index) => {
      event.preventDefault();
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
        setTasks(temp)
    }

    const handleEdit = (text,index) => {
            setForm(text);
            inputRef.current.focus()
            handleDelete(index)
    }

    const handleDone = (index) => {
        const temp = [...tasks]
        temp[index].done=true
        setTasks(temp)
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

  return (
    <div className='container'>
      <div className='sub-container'>
        <>
        <InputBarr handleAddTask={handleAddTask} form={form} setForm={setForm} inputRef = {inputRef}/>
        <List tasks={tasks} handleDone={handleDone} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </>
      </div> 
    </div>
  )
}

export default App