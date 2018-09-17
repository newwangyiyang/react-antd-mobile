import React, { Component } from 'react'


import CSSModules from 'react-css-modules';
import styles from './TryTest.css';
import CommentInput from './CommentInput';
import ComponentLists from './ComponentLists';
class TryTest extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        };
    }
    render() {
        return(
            <div styleName='TryTest'>
                <CommentInput handler={(obj) => this.submitHandler(obj)} />
                <ComponentLists list={this.state.list} />
            </div>
        )
    }
    //定义CommentInput点击发布的回调
    submitHandler(obj) {
        console.log(obj);
        let list = this.state.list;
        console.log(list);
        list.push(obj);
        this.setState({
            list
        });
    }
}

export default CSSModules(TryTest, styles);