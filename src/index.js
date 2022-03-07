import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import view from "./Componentes/Carrusel"

import { Provider } from 'react-redux';
import { createStore, apllyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PrincipalReducer from './Redux/reduce/PrincipalReducer'


const reduxStore = createStore(PrincipalReducer, apllyMiddleware(thunk))

ReactDOM.render(

  <React.StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
