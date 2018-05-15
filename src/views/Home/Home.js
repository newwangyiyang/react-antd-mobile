import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Home.css';
class Home extends Component{
    render() {
        return (
            <div styleName="Home">
                <h1>this is home page</h1>
            </div>
        )
    }
}

export default CSSModules(Home, styles);