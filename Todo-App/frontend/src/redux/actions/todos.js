import { createAction } from "@reduxjs/toolkit";
import request from "../../utils/request";

export const setTodos = createAction("SET_TODOS");
export const addTodoUpdate = createAction("ADD_TODO_UPDATE");
export const removeTodoUpdate = createAction("REMOVE_TODO_UPDATE");
export const toggleDoneUpdate = createAction("TOGGLE_DONE");
export const editTodoUpdate = createAction("EDIT_TODO_UPDATE");

export function getTodos() {
  return (dispatch, getState) => {
    const { auth } = getState();
    const isLoggedIn = !!auth.user;

    if (!isLoggedIn) {
      dispatch(setTodos([]));
      return;
    }

    return request.post('/todos', { id: auth.user.id })
      .then(({ data }) => dispatch(setTodos(data)))
      .catch(err => console.error(err));
  };
}

export function addTodo(todo) {
  const newTodo = { ...todo, id: crypto.randomUUID(), done: false };

  return (dispatch, getState) => {
    const { auth } = getState();
    const isLoggedIn = !!auth.user;

    if (!isLoggedIn) {
      dispatch(addTodoUpdate(newTodo));
      return;
    }

    return request.post('/add-todo', { todo: newTodo, id: auth.user.id })
      .then(() => dispatch(addTodoUpdate(newTodo)))
      .catch(err => console.error(err));
  };
}

export function removeTodo(todoId) {

  return (dispatch, getState) => {
    const { auth } = getState();
    const isLoggedIn = !!auth.user;

    if (!isLoggedIn) {
      dispatch(removeTodoUpdate(todoId));
      return;
    }

    return request.post('/remove-todo', { userId: auth.user.id, todoId })
      .then(() => dispatch(removeTodoUpdate(todoId)))
      .catch(err => console.error(err));
  };
}

export function editTodo(newTodo) {
  return (dispatch, getState) => {
    const { auth } = getState();
    const isLoggedIn = !!auth.user;

    if (!isLoggedIn) {
      dispatch(editTodo(newTodo));
      return;
    }

    return request.post('/edit-todo', { todo: newTodo, userId: auth.user.id })
      .then(() => dispatch(editTodoUpdate(newTodo)))
      .catch(err => console.error(err));
  };
}

export function toggleDone(todoId) {
  return (dispatch, getState) => {
    const { auth } = getState();
    const isLoggedIn = !!auth.user;

    if (!isLoggedIn) {
      dispatch(toggleDoneUpdate(todoId));
      return;
    }

    return request.post('/toggle-done', { todoId, userId: auth.user.id })
      .then(() => dispatch(toggleDoneUpdate(todoId)))
      .catch(err => console.error(err));
  };
}