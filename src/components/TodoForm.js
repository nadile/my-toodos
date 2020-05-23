import React, { useState } from 'react'
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: rgb(97, 58, 156);
  margin-top:120px;
`
const Input = styled.input`
  padding: 0.5em;
  width:400px;
  height:25px;
  margin: 0.5em;
  color: rgb(14, 14, 212);
  background: whitesmoke;
  border: none;
  border-radius: 8px;
`;

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleInput = (e) => {
        setTodo({ ...todo, task: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) { //boslukları yok etmesi icin trim fonk.
            addTodo({ ...todo, id: uuid() }); //add id
            setTodo({ ...todo, task: "" }) //reset task input
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Title>Add your Toodos</Title>
            <Input placeholder="Add todos"
                onChange={handleInput}
                value={todo.task}
                name="task"
                task={todo.task}
                type="text"
            />
            <input type="submit"
                value="add"
                className="btn-add"
            />
        </form>
    )
}

export default TodoForm;