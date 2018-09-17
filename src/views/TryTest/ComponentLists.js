import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './TryTest.css';
import CommentItem from './CommentItem';
class ComponentLists extends Component {
    render() {
        return(
            <div styleName='TryTest'>
                {this.props.list.map((v, i) => {
                    return (
                        <CommentItem item={v} key={i} />
                    )
                })}
            </div>
        )
    }
}

export default CSSModules(ComponentLists, styles);