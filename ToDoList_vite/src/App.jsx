import React from 'react';
import Header from './components/Header.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoItem from './components/ToDoItem';
import { Todos } from './utils/mockdata.js';
import ToDoForm from './components/ToDoForm.jsx';

function App() {
  

  return (
    <div className="app-container">
      <div className="todo-app">
        <Header />
      </div>
      <ToDoForm></ToDoForm>

    </div>
      
  )
}

export default App
