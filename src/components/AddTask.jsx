import React, { useState } from "react";

import "./AddTask.css";
import "./Button.css";

import Button from "./Button";

const AddTask = ({ handleTaskAdition }) => {
    const [inputData, setInputData] = useState();

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTask = () => {
        handleTaskAdition(inputData);
        setInputData("");
    }

    return (
        <div className="add-task-container">
            <input
                onChange={handleInputChange}
                type="text"
                value={inputData}
                className="add-task-input"
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTask}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;