import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/constants/todosConstants';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          location: action.location,
        },
      ];
    case UPDATE_TODO:
      return state.map((element) => {
        if (element.id === action.id) {
          return {
            ...element,
            text: action.text,
            finished: action.finished,
            location: action.location,
          };
        }
        return element;
      });
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};

export default todos;
