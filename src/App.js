import React, { useState } from 'react';
import logo from './logo.svg';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
    <h1>Todos</h1>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      <TodoList todos={todos}
       deleteTodo={todoIndex => {
        const newTodos = todos
          .filter((_, index) => index !== todoIndex);
      
        setTodos(newTodos);
        }}
      />
    <div saveTodo={console.warn} />
   </div>
  );
};

export default App;
