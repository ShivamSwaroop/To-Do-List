import './listStyle.css';
import { useState } from 'react';

function ToDoForm ({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask.trim());
      setNewTask(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="form-input"
      />
      
      <button
        type="submit"
        className="btn btn-add"
        disabled={!newTask.trim()}
      >
        Add Task
      </button>
    </form>
  );
};
export default ToDoForm;