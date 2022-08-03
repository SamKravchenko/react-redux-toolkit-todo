import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todosSlice';
import './CreatePanel.scss';

const CreatePanel = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const id = useId();
  const handleAdd = () => {
    if (title.trim() && description.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          title,
          description,
          completed: false,
        })
      );
      setTitle('');
      setDescription('');
    }
  };
  return (
    <div className="create-panel">
      <label className="create-panel__label" htmlFor={id}>
        <input
          className="create-panel__input"
          id={id}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </label>
      <label className="create-panel__label" htmlFor={id}>
        <input
          className="create-panel__input"
          id={id}
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </label>
      <button
        type="button"
        className="create-panel__btn"
        onClick={handleAdd}
        disabled={!title.trim() || !description.trim()}
      >
        Add
      </button>
    </div>
  );
};

export default CreatePanel;
