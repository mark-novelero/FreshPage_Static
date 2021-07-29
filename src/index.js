import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import FixedHeader from './fixed_header/FixedHeader';


ReactDOM.render(
  <React.StrictMode className= "top">
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


