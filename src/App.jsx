import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livro',
      completed: true,
    },
    {
      id: '3',
      title: 'Lavar Louça',
      completed: false,
    },
  ]);

  const handleTaskAdition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      },
    ];
    setTasks(newTasks);
  };

  const handleChangeStatus = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task === taskId) return { ...task, completed: !task.completed }
      return task
    })
    setTasks(newTasks);
  }
  return (
    <>
      <div className="container">
        <AddTask handleTaskAdition={handleTaskAdition} />
        <Tasks
          tasks={tasks}
          handleChangeStatus={handleChangeStatus}
        />
      </div>
    </>
  );
};

export default App;