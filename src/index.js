import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();
