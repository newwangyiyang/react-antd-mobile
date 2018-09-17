import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './PercentApp.css';

class Input extends Component {
    render() {
        return (
            <div styleName='Input'>
                <input type="tel" value={this.props.value} onChange={e => this.getValue(e)}/>
            </div>
        )
    }
    getValue(e) {
        this.props.handler(e.target.value);
    }
}


export default CSSModules(Input, styles);