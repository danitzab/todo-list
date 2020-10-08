import { v4 as uuidv4 } from 'uuid';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './constants/todosConstants';

export const addTodo = (text, location) => ({
  type: ADD_TODO,
  id: uuidv4(),
  text,
  finished: false,
  location,
});

export const updateTodo = (id, text, finished, location) => ({
  type: UPDATE_TODO,
  id,
  text,
  finished,
  location,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
