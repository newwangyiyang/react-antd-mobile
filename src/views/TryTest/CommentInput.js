import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './TryTest.css';

import store from 'store';
class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: '',
            createtime: ''
        };
    }
    render() {
        return(
            <div styleName='CommentInput'>
                <div styleName='comment_input_title'>
                    <span>用户名:</span>
                    <input onBlur={e => this.saveUsername(e)} onChange={e => this.getUsername(e)} type="text" value={this.state.username} />
                </div>
                <div styleName="comment_input_content">
                    <span>评论内容:</span>
                    <textarea ref='input' onChange={e => this.getContent(e)} value={this.state.content} />
                </div>
                <div styleName='comment_input_btn'>
                    <button onClick={() => this.getSubmit()}>发布</button>
                </div>
            </div>
        )
    }
    componentWillMount() {
        const username = store.get('username');
        const content = store.get('content');
        this.setState({
            username,
            content
        });
    }
    componentDidMount() {
        this.refs.input.focus();
    }
    getUsername(e) {
        this.setState({
            username: e.target.value
        });
    }
    saveUsername(e) {
        store.set('username', e.target.value);
    }
    getContent(e) {
        const content = e.target.value;
        this.setState({
            content
        });
    }
    getSubmit() {
        const {username, content} = this.state;
        const createtime = +new Date();
        //调用父组件传递的点击发布的回调方法，更新state状态
        if(this.props.handler) {
            this.props.handler({username, content, createtime});
        }
        this.setState({
            username: '',
            content: ''
        });
    }
}

export default CSSModules(CommentInput, styles);