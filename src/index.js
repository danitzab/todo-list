import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

// Components
import App from './App';

// Styles
import './styles/tailwind.css';
import './styles/index.css';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
