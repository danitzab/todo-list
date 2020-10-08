import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import locationReducer from './locationReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todosReducer', 'locationReducer'],
};

const rootReducer = combineReducers({
  todosReducer,
  locationReducer
});

export default persistReducer(persistConfig, rootReducer);
