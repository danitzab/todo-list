import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions/todoActions';

// Icons
import deleteIcon from '../assests/icons/delete.svg';
import saveIcon from '../assests/icons/save.svg';
import updateIcon from '../assests/icons/update.svg';

const Todo = ({ id, text, finished, location, dispatchDeleteTodo, dispatchUpdateTodo }) => {
  const [isUpdate, setIsUpdat] = useState(false);
  const [input, setInput] = useState(text);

  const handlechecked = () => {
    dispatchUpdateTodo(id, text, !finished, location);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDelet = () => {
    dispatchDeleteTodo(id);
  };

  const handleUpdate = () => {
    if (isUpdate) {
      dispatchUpdateTodo(id, input, false);
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
          <button className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-red-500  hover:bg-red-700" onClick={handleDelet}>
            <img src={deleteIcon} alt="add" />
          </button>
        ) : (
          <>
            <button
              className={
                'flex-no-shrink py-2 px-4 ml-2 rounded text-white focus:outline-none ' +
                (isUpdate ? 'bg-blue-800 hover:bg-blue-900' : ' bg-blue-500  hover:bg-blue-600')
              }
              onClick={handleUpdate}
            >
              {isUpdate ? <img src={saveIcon} alt="save" /> : <img src={updateIcon} alt="update" />}
            </button>
            <button
              className="flex-no-shrink py-2 px-4 ml-2 rounded text-white bg-red-500  hover:bg-red-700 focus:outline-none"
              onClick={handleDelet}
            >
              <img src={deleteIcon} alt="delet" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteTodo: (id) => dispatch(deleteTodo(id)),
  dispatchUpdateTodo: (id, text, finished, location) => dispatch(updateTodo(id, text, finished, location)),
});

export default connect(null, mapDispatchToProps)(Todo);
