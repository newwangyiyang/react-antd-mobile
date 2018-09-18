import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './SecondTest.css';
import PropTypes from 'prop-types'


class SecondTest extends Component {
    static childContextTypes = {
        color: PropTypes.string
    }
    static propTypes = {
        obj: PropTypes.object
    }
    static defaultProps = {
        obj: {
            name: '王一扬'
        }
    }
    constructor() {
        super();
        this.state = {
            color: '世界001'
        };
    }
    getChildContext() {
        return {color: this.state.color};
    }
    render() {
        return (
            <div styleName='SecondTest'>
                <h1>{this.state.color}</h1>
                <Title />
            </div>
        )
    }
}

class Title extends Component {
    static contextTypes = {
        color: PropTypes.string
    }
    render() {
        return (
            <div onClick={() => this.changeContext()}>
                {this.context.color}
            </div>
        )
    }
    changeContext() {
        console.log(1);
        this.context.color = 'love';
        console.log(this.context.color);
    }
}

export default CSSModules(SecondTest, styles);
