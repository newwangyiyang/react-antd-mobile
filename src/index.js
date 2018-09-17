import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './route/index';
// import './assets/css/reset.css';
ReactDOM.render(
    <Route />, 
    document.getElementById('root'));
registerServiceWorker();
