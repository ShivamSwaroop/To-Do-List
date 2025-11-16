import './listStyle.css';
import ToDoItem from './ToDoItem.jsx';  


function ToDoList ({ todos, onToggle, onDelete })  { 
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">
          No tasks yet! Add a new one above.
        </p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id} //Unique key
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            
          />
        ))
      )}
    </ul>
  );
};
export default ToDoList