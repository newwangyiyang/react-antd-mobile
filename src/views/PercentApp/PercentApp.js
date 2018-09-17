import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './PercentApp.css';
import Input from './Input';
import Show from './Show';
class PercentApp extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <div styleName='PercentApp'>
                <Input value={this.state.value} handler={v => this.getValue(v)} />
                <Show value={this.state.value} />
            </div>
        )
    }
    getValue(v) {
        this.setState({
            value: v
        })
    }
}

export default CSSModules(PercentApp, styles);