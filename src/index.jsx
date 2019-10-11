import React from 'react';
import ReactDOM from 'react-dom';
import './Core/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './Core/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
