import React from 'react';
import Todo from "./Todo";
import { List } from "@material-ui/core";

const TodoList = ({ todos, taskCompleted, removeTask }) => {
    return (
        <List>
            <ul >
                {todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        taskCompleted={taskCompleted}
                        removeTask={removeTask}
                    />
                ))}
            </ul>
        </List>);
}

export default TodoList;