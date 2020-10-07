import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
// import { addTodo } from '../actions';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleButton = () => {
    console.log(input);
    addTodo(input);
    setInput('');
  };

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={input}
        onChange={handleInput}
      />
      <button
        className="flex-no-shrink py-2 px-4 text-lg rounded text-white bg-teal-500 hover:text-white hover:bg-teal-700"
        onClick={handleButton}
      >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(AddTodo);
