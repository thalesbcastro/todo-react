import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "./Button";

import "./TaskDetails.css"

const TaskDetail = () => {
    const history = useHistory()
    const params = useParams();

    const handleBack = () => {
        history.goBack();
    }
    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBack}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Omnis, officia! Magnam consectetur nemo a dolorem.
                </p>
            </div>
        </>
    )
}

export default TaskDetail