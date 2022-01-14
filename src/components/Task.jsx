import React from "react";
import { CgClose, CgInfo } from "react-icons/cg"
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleChangeStatus, handleDeleteTask }) => {
    const history = useHistory();

    const handleTaskDetails = () => {
        history.push(`/${task.title}`);
    }
    return (
        <div
            className="task-container"
            style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
        >
            <div className="task-title" onClick={() => handleChangeStatus(task.id)}>
                {task.title}
            </div>
            <div className="buttons-container">
                <button
                    className="see-task-details-button"
                    onClick={handleTaskDetails}
                >
                    <CgInfo />
                </button>
                <button
                    className="remove-task-button"
                    onClick={() => handleDeleteTask(task.id)} >
                    <CgClose />
                </button>

            </div>
        </div>
    );
};

export default Task;