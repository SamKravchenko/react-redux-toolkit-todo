import { useDispatch } from 'react-redux';
import { removeTodo, setCompletedTodo } from '../../store/todosSlice';
import './Todo.scss';

const Todo = ({ id, title, description, completed }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => dispatch(removeTodo(id));
  const handleCompleted = (id) => dispatch(setCompletedTodo(id));
  return (
    <li className={`todo todo-${id}`}>
      <div className="todo__header">
        <label htmlFor={id}>
          <input
            id={id}
            className="todo__completed"
            type="checkbox"
            checked={completed}
            onChange={() => handleCompleted(id)}
          />
          <h3 className="todo__title">{title}</h3>
        </label>
        <button
          className="todo__rm-btn"
          type="button"
          onClick={() => handleRemove(id)}
        >
          &times;
        </button>
      </div>
      {completed || <p className="todo__desc">{description}</p>}
    </li>
  );
};

export default Todo;
