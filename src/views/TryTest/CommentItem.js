import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './TryTest.css';
import dayjs from 'dayjs';
class CommentItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        };
    }
    render() {
        return(
            <div styleName='CommentItem'>
                <i>{this.props.item.username}:</i>
                <span>{this.props.item.content}</span>
                <b>{this.state.time}前</b>
            </div>
        )
    }
    componentWillMount() {
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 5000);
    }
    getTime() {
        let time = this.props.item.createtime;
        this.setState({
            time: dayjs(+new Date() - time).format('mm:ss')
        });
    }

}

export default CSSModules(CommentItem, styles);