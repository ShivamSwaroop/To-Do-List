import React from 'react';
import Header from './components/Header.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoItem from './components/ToDoItem';
import { Todos } from './utils/mockdata.js';
import ToDoForm from './components/ToDoForm.jsx';
import { useState } from 'react';

const initialTodos = Todos;

function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  
  const [nextId, setNextId] = useState(initialTodos.length > 0 ? Math.max(...initialTodos.map(t => t.id)) + 1 : 1);

  
  const handleAddTask = (text) => {
    const newTodo = {
      id: nextId,
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNextId((prevId) => prevId + 1);
  };

 
  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
       
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };


  return (
    <>
    <div className="app-container">
      <div className="todo-app">
        <Header />
         <main style={{ padding: '20px' }}>
            <ToDoForm onAddTask={handleAddTask} />
            
            <ToDoList
              todos={todos}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          </main>
          
          <footer className="footer">
              Total Tasks: {todos.length} | Completed: {todos.filter(t => t.completed).length}
          </footer>
      </div>
    </div>
      </>
  )
}

export default App
