import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, action) {
      return [...state, action.payload];
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    setCompletedTodo(state, action) {
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, removeTodo, setCompletedTodo } = todosSlice.actions;
export default todosSlice.reducer;
