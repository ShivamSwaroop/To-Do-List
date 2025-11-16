import './listStyle.css';

function ToDoItem({ todo , onToggle , onDelete}){
   const itemClasses = todo.completed ? 'todo-item completed' : 'todo-item';
    return(
        <li className={itemClasses}>
      <div className="todo-content">
        <span className="todo-text">
          {todo.text}
        </span>
      </div>

      <div className="todo-actions">
        
        {/* Complete Button */}
        {!todo.completed && (
            <button
              onClick={() => onToggle(todo.id)}
              className={'btn btn-complete'}
              title="Mark as completed"
            >
              Done
            </button>
        )}

        {/*Delete Button */}
        <button
          onClick={() => onDelete(todo.id)}
          className="btn btn-delete"
          title="Delete task"
        >
          Delete
        </button>
      </div>
    </li>

    )
}
export default ToDoItem;