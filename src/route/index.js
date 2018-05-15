import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import App from '../views/App/App';
import Home from '../views/Home/Home';
class RouteConfig extends Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Home" component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

export default RouteConfig;