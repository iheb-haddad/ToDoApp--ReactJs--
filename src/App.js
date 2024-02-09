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
    const [taskEdited , setTaskEdited] = useState('')

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }, [tasks]);

  return (
    <div className='container'>
        <InputBarr form={form} setForm={setForm} tasks={tasks} setTasks={setTasks} inputRef = {inputRef} taskEdited={taskEdited} setTaskEdited={setTaskEdited}/>
        <List tasks={tasks} setTasks={setTasks} form={form} setForm={setForm} inputRef = {inputRef} taskEdited={taskEdited} setTaskEdited={setTaskEdited}/>
    </div>
  )
}

export default App