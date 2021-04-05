import { useState } from 'react';
//import AddTask from './components/AddTask/AddTask
//import Task from './components/Task/Task'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import './App.css';
import React from 'react'

function App() {

  const [tasks, setTasks] = useState([
    { id: '001', text: "Water plants", completed: false, date: "2019-09-20" },
    { id: '002', text: "Make oat milk", completed: true, date: "2019-09-18" },
    { id: '003', text: "Wash car", completed: true, date: "2019-09-21" },
    { id: '004', text: "clean plants", completed: false, date: "2019-03-20" },
    { id: '005', text: "Make cake", completed: false, date: "2019-09-18" },
    { id: '006', text: "Wash clothes", completed: true, date: "2019-09-27" },
    { id: '007', text: "Wash rugs", completed: false, date: "2020-09-27" }
  ]);

const deleteTask = id =>{
  const updatedTasks = tasks.filter(task => task.id !== id) 
  setTasks(updatedTasks)
}

  const createTask = id =>{
    const updatedTasks = tasks.append(task => task.id === id) 
    setTasks(updatedTasks)
}
  const compeleteTask = tasks.filter(task => task.completed);
  const incompeleteTasks = tasks.filter(task => !task.completed);

  return (
    <div className="App">
      <Header createTask = {createTask} taskCount={incompeleteTasks.length} />
      <main className="all-tasks">
        <TaskList  deleteTask= {deleteTask} tasks={incompeleteTasks} status='incomplete' />
        <TaskList deleteTask= {deleteTask} tasks={compeleteTask} status='complete' />
      </main>
    </div>
  );
}

export default App;