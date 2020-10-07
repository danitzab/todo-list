import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import Todo  from './Todo';

const TodoList = ({ todos }) => {
  console.log('todos', todos);
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="p-6 m-4 w-full">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <AddTodo />
        </div>
        <div>
          {todos.map((element, index) => (
            <Todo key={index} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, null)(TodoList);
