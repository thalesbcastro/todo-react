import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleChangeStatus }) => {
    return (
        <>
            {tasks.map(task => <Task task={task} handleChangeStatus={handleChangeStatus} />)}
        </>
    );
};

export default Tasks;