import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './LiveTime.css';
import dayjs from 'dayjs';
import axios from '../../axios/http';

class LiveTime extends Component {
    constructor() {
        super();
        this.state = {
            b: true,
            time: dayjs().format('YYYY-MM-DD hh:mm:ss')
        };
    }
    async componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({
                time: dayjs().format('YYYY-MM-DD hh:mm:ss')
            });
        }, 1000);

        const data = await axios.get('https://api.myjson.com/bins/lv61i');
        console.log(JSON.stringify(data));
    }
    render() {
        return (
            <div styleName='LiveTime'>
                {this.state.b ? <h1>{this.state.time}</h1> : null}
                <button onClick={() => this.changeB()}>按钮</button>
            </div>
        )
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 执行了')
        clearInterval(this.timer);
    }
    changeB() {
        this.setState({
            b: !this.state.b
        });
    }
}

export default CSSModules(LiveTime, styles);
