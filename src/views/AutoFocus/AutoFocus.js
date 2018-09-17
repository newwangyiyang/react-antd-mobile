import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './AutoFocus.css';

class Post extends Component {
    static defaultProps = {
        content: 'this is param'
    }
    render() {
        return (
            <div>
                <p ref='p' style={{lineHeight: '100px'}}>{this.props.content}</p>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.p.clientHeight);
    }
}


class AutoFocus extends Component {
    render() {
        return (
            <div styleName='AutoFocus'>
                <Post content='love' />
            </div>
        )
    }
    componentDidMount() {

    }
}
export default CSSModules(AutoFocus, styles);