import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const rootEl = document.getElementById('main');
const root = ReactDOM.createRoot(rootEl);

const initialState = {
  todo: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: Date.now(),
            text: action.payload,
          },
        ],
      };
    default:
      return state;
  }
}

const store = createStore(todoReducer, initialState);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// ============================================================================================================
