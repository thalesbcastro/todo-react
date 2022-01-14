import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleChangeStatus, handleDeleteTask }) => {
    return (
        <>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTask={handleDeleteTask}
                />
            ))}
        </>
    );
};

export default Tasks;