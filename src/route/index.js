import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import App from '../views/App/App';
import Home from '../views/Home/Home';
import StudyPage from '../views/StudyPage/StudyPage';
import ReStudy from '../views/ReStudy/ReStudy';
import TryTest from '../views/TryTest/TryTest';
import PercentApp from '../views/PercentApp/PercentApp';
import LiveTime from '../views/LiveTime/LiveTime';
import AutoFocus from '../views/AutoFocus/AutoFocus';
import PropChildren from '../views/PropChildren/PropChildren';
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
                    <Route exact path="/PercentApp" component={PercentApp} />
                    <Route exact path='/LiveTime' component={LiveTime} />
                    <Route exact path='/AutoFocus' component={AutoFocus} />
                    <Route exact path='/PropChildren' component={PropChildren} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

export default RouteConfig;