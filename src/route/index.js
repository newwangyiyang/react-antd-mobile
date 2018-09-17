import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import App from '../views/App/App';
import Home from '../views/Home/Home';
import StudyPage from '../views/StudyPage/StudyPage';
import ReStudy from '../views/ReStudy/ReStudy';
import TryTest from '../views/TryTest/TryTest';
class RouteConfig extends Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/StudyPage" component={StudyPage} />
                    <Route exact path="/ReStudy" component={ReStudy} />
                    <Route exact path="/TryTest" component={TryTest} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

export default RouteConfig;