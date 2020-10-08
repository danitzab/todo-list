import React from 'react';

// Components
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="p-6 m-4 w-full">
        <div className="mb-8">
          <AddTodo />
        </div>
        <div>
          <h1 className="font-bold bg-gray-200 rounded p-2 text-gray-700">To Do</h1>
          <hr className="mb-6" />
          {todos
            .filter((element) => !element.finished)
            .map((element, index) => (
              <Todo key={index} {...element} />
            ))}
        </div>
        <div>
          <h1 className="font-bold mt-8 bg-gray-200 rounded p-2 text-gray-700">Done</h1>
          <hr className="mb-6" />
          {todos
            .filter((element) => element.finished)
            .map((element, index) => (
              <Todo key={index} {...element} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
