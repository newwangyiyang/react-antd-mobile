import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Route from './route/index';
ReactDOM.render(
    <Route />, 
    document.getElementById('root'));
registerServiceWorker();
