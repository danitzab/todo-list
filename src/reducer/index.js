import { combineReducers } from 'redux';

const initialState = [
  {
    id: 1,
    text: 'Hola soy Dani',
    finished: false,
  },
  {
    id: 2,
    text: 'Hola soy Dani 2',
    finished: true,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return state;
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case 'UPDATE_TODO':
        console.log('action', action);
      return state.map((element) => {
        if (element.id === action.id) {
          return {
            ...element,
            text: action.text,
            finished: action.finished,
          };
        }
        return element;
      });
    case 'DELETE_TODO':
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
