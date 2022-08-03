import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

const preloadedState = JSON.parse(localStorage.getItem('store')) || {
  todos: [],
};

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
