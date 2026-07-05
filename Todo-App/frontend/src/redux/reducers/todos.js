import { createReducer } from "@reduxjs/toolkit";
import { addTodoUpdate, editTodoUpdate, removeTodoUpdate, setTodos, toggleDoneUpdate } from "../actions/todos";

export const todos = createReducer([], (builder) => {
  builder
    .addCase(setTodos, (state, {payload}) => payload)
    .addCase(addTodoUpdate, (state, { payload: todo }) => [...state, todo])
    .addCase(removeTodoUpdate, (state, { payload: id }) => state.filter((t) => t.id != id))
    .addCase(toggleDoneUpdate, (state, { payload: id }) => 
      state.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
    )
    .addCase(editTodoUpdate, (state, {payload}) => 
      state.map((todo) => todo.id === payload.id ? { ...todo, title: payload.title, description: payload.description } : todo)
    )
});
