import CreatePanel from './components/CreatePanel';
import TodoList from './components/TodoList';

import './App.scss';

const App = () => {
  return (
    <section className="App">
      <div className="container">
        <h1 className="App__title">RRT Todo</h1>
        <CreatePanel />
        <TodoList />
      </div>
    </section>
  );
};

export default App;
