import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
const Todo = ({ todo, taskCompleted, removeTask }) => {

    function handleCheckbox() {
        taskCompleted(todo.id);
    }

    function handleRemoveTask() {
        removeTask(todo.id);
    }
    return (
        <ListItem style={{ display: "flex", marginLeft: "330px" }}>
            <Checkbox onClick={handleCheckbox} />
            <Typography variant="body1"
                style={{ textDecoration: todo.completed ? "line-through" : null, color: "rgb(13, 13, 206)", fontWeight: "bold" }}
            >
                {todo.task}
            </Typography>
            <IconButton onClick={handleRemoveTask}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;