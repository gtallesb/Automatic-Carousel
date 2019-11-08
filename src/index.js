import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var destination = document.querySelector('#container');

ReactDOM.render(
  <div className='mainContainer'>
   <App/>
  </div>,
  destination
);
