import React, { Component } from 'react';
import styles from './App.css';
import CSSModules from 'react-css-modules';

import $http from '../../axios/http';
//引入
import { NavBar, Icon } from 'antd-mobile';
class App extends Component {
  render() {
    return (
      <div styleName="App">
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
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
  async componentWillMount() {
    try {
      let {data} = await $http.get('https://api.myjson.com/bins/lv61i');
      console.log(data);
    }catch(e) {
      console.log(JSON.stringify(e));
    }
  }
}

export default CSSModules(App, styles);
