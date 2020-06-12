import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import Glad  from './Greet.js';
ReactDOM.render(
  <React.StrictMode>
    <Glad saying="hi" />
  </React.StrictMode>,
  document.getElementById('root2')
);


