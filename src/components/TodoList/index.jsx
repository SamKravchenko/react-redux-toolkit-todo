import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Todo from '../Todo';
import './TodoList.scss';

const TodoList = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const todos = useSelector((store) => store.todos);
  return (
    <CSSTransition
      in={!!todos.length}
      timeout={300}
      classNames="todos-list-transition"
      unmountOnExit
    >
      <ul className="todos-list">
        <h2
          role="button"
          className="todos-list__title"
          onClick={() => setIsCollapsed((prev) => !prev)}
        >
          Todos
        </h2>
        {isCollapsed ||
          todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
            />
          ))}
      </ul>
    </CSSTransition>
  );
};

export default TodoList;
