import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './TryTest.css';
class CommentItem extends Component {
    render() {
        return(
            <div styleName='CommentItem'>
                <i>{this.props.item.username}:</i>
                <span>{this.props.item.content}</span>
            </div>
        )
    }
}

export default CSSModules(CommentItem, styles);