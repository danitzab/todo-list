let nextTodoId = 2;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  finished: false,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
});

export const updateTodo = (id, text, finished) => ({
  type: 'UPDATE_TODO',
  id,
  text,
  finished,
});

export const loadTodos = () => ({
  type: 'LOAD_TODOS',
});
