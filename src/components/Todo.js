import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions';

const Todo = ({ id, text, finished, deleteTodo, updateTodo }) => {
  const handlechecked = (e) => {
    updateTodo(id, text, !finished);
  };

  const handleDeletCheckbox = () => {
    deleteTodo(id);
  };

  return (
    <div>
      <div className="flex mb-4 items-center">
        <label className={'w-full text-grey-darkest ' + (finished ? 'line-through' : '')}>
          <input
            type="checkbox"
            className="mr-2 form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            checked={finished}
            onChange={handlechecked}
          />
          {text}
        </label>
        <button className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-green-500  hover:bg-green-700" onClick={handleDeletCheckbox}>
          Editar
        </button>
        <button className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-red-500  hover:bg-red-700" onClick={handleDeletCheckbox}>
          X
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id, text, finished) => dispatch(updateTodo(id, text, finished)),
});

export default connect(null, mapDispatchToProps)(Todo);
