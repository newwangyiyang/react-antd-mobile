import React, { Component } from 'react'
import CSSModules from 'react-css-modules';

import styles from './NewStudy.css';
import PropTypes from 'prop-types';
class Post extends Component {
    static propTypes = {
        style: PropTypes.object
    }
    render() {
        let obj = {};
        for(let v in this.props.style) {
            obj[v] = this.props.style[v];
        }
        return (
            <div style={obj}>
                <p>时间</p>
            </div>
        )
    }
}


class NewStudy extends Component{
    constructor() {
        super();
        this.state = {
            content: '<h1>this is one page</h1>',
            color: 'red'
        };
    }
    render() {
        return(
            <div styleName='NewStudy'>
                <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                <div style={{color: this.state.color}} onClick={()=>this.changeColor()}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima voluptatum sed et est hic alias quae dolor incidunt nulla quas aperiam commodi quia, facere aliquid aut architecto similique labore
                </div>
                <Post style={{fontSize: '100px', fontWeight: 600}} />
            </div>
        )
    }
    changeColor() {
        this.setState({
            color: 'blue'
        });
    }
}

export default CSSModules(NewStudy, styles);