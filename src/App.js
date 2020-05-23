import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    console.log(`****${todos.task}`);
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function taskCompleted(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }
  function removeTask(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="App">
      <TodoForm
        addTodo={addTodo} />
      <TodoList
        todos={todos}
        taskCompleted={taskCompleted}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
