import React from "react";

import "./Task.css";

const Task = ({ task, handleChangeStatus }) => {
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            {task.title}
        </div>
        // <div className="task-container">
        //     <h1 className="task-title">
        //         {task.title}
        //     </h1>
        // </div>
    );
}
// PAREI 56:39
export default Task;