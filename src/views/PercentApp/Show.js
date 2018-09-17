import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './PercentApp.css';
class Show extends Component {
    render() {
        return (
            <div styleName='Show'>
                <h1>{(this.props.value * 100).toFixed(2)}%</h1>
            </div>
        )
    }
}   

export default CSSModules(Show, styles);