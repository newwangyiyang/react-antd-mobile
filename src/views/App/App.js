import React, { Component } from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules';

//引入
import { NavBar, Icon, Button } from 'antd-mobile';
class App extends Component {
  render() {
    return (
      <div styleName="App">
        <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
      <Button onClick={(e) => this.getNum(e)} type="warning" inline size="small" style={{ marginRight: '4px' }}>ghost</Button>
      <NavBar
        mode="dark"
        leftContent="Back"
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
      </div>
    );
  }
  getNum(e) {
    let i = 0;
    console.log(i++);
  }
}

export default CSSModules(App, styles);
