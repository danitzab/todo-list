import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions';

const Todo = ({ id, text, finished, deleteTodo, updateTodo }) => {
  const [isUpdate, setIsUpdat] = useState(false);
  const [input, setInput] = useState(text);

  const handlechecked = (e) => {
    updateTodo(id, text, !finished);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeletCheckbox = () => {
    deleteTodo(id);
  };

  const handleUpdate = () => {
    if (isUpdate) {
      updateTodo(id, input, false);
    }
    setIsUpdat(!isUpdate);
  };

  return (
    <div>
      <div className="flex mb-4 items-center">
        {isUpdate ? (
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
            value={input}
            onChange={handleInput}
          />
        ) : (
          <label className={'w-full text-grey-darkest ' + (finished ? 'line-through' : '')}>
            <input
              type="checkbox"
              className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={finished}
              onChange={handlechecked}
            />
            {text}
          </label>
        )}
        {finished ? (
          <button className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-red-500  hover:bg-red-700" onClick={handleDeletCheckbox}>
            X
          </button>
        ) : (
          <>
            <button
              className={
                'flex-no-shrink py-2 px-4 ml-2 rounded text-white ' +
                (isUpdate ? 'bg-blue-500  hover:bg-blue-700' : ' bg-green-500  hover:bg-green-700')
              }
              onClick={handleUpdate}
            >
              {isUpdate ? 'Save' : 'Edit'}
            </button>
            <button className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-red-500  hover:bg-red-700" onClick={handleDeletCheckbox}>
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id, text, finished) => dispatch(updateTodo(id, text, finished)),
});

export default connect(null, mapDispatchToProps)(Todo);
