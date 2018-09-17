import React, { Component } from 'react'
import CSSModules from 'react-css-modules';
import styles from './PropChildren.css';

class Post extends Component {
    render() {
        return (
            <div>
                {this.props.children.map((v, i) => {
                    return (
                        <div style={{border: '1px solid #000'}} key={i}>
                            {v}
                        </div>
                    )
                })}
            </div>
        )
    }
}


class PropChildren extends Component {
    render() {
        return (
            <div>
                <Post>
                    <h1>123</h1>
                    <p>456</p>
                    <p>456</p>
                    <p>456</p>
                    <p>456</p>
                </Post>
            </div>
        )
    }
}

export default CSSModules(PropChildren, styles);