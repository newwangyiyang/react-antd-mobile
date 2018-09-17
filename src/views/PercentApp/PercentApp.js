import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './PercentApp.css';
class PercentApp extends Component {
    render() {
        return (
            <div styleName='PercentApp'>123</div>
        )
    }
}

export default CSSModules(PercentApp, styles);