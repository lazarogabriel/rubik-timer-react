import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Fires when users right click or long press in mobile, stops opening menu 
window.oncontextmenu = e => {
  e.preventDefault();
  e.stopPropagation();
};
