import React, { useState } from 'react';

// Redux
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

// Icons
import addIcon from '../assests/icons/add.svg';

const AddTodo = ({ dispatchAddTodo, currentLocation }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleButton = (e) => {
    e.preventDefault();
    dispatchAddTodo(input, currentLocation);
    setInput('');
  };

  return (
    <form className="flex mt-4" onSubmit={handleButton}>
      <input
        type="search"
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        pattern="[A-Za-z0-9]{1,15}"
        value={input}
        onChange={handleInput}
      />
      <button
        type="button"
        className="flex-no-shrink py-2 px-4 text-lg rounded text-white bg-teal-400 hover:text-white hover:bg-teal-600"
        onClick={handleButton}
        disabled={!input}
      >
        <img src={addIcon} alt="add" />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    currentLocation: state.locationReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchAddTodo: (text, location) => dispatch(addTodo(text, location)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
