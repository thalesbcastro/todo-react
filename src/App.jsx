import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TaskDetail from "./components/TaskDetail";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

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

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  const handleChangeStatus = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    })
    setTasks(newTasks);
  }
  return (
    <Router>
      <div className="container">
        <Header />
        <Route
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleTaskAdition={handleTaskAdition} />
              <Tasks tasks={tasks} handleChangeStatus={handleChangeStatus} handleDeleteTask={handleDeleteTask} />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetail} />
      </div>
    </Router>
  );
};

export default App;