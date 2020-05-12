/* eslint-disable react/sort-comp */
import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";

import './app.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/home/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = configStore();

class App extends Component {
  state = {
    __tabs: {
      color: "#a6a6a6",
      selectedColor: "#07BFE3",
      backgroundColor: "white",
      borderStyle: 'black',
      list: [{
        pagePath: "/pages/home/index",
        iconPath: require("././assets/tabbar/home.png"),
        selectedIconPath: require("././assets/tabbar/homt_selected.png"),
        text: '首页'
      }, {
        pagePath: "/pages/connection/index",
        iconPath: require("././assets/tabbar/connect.png"),
        selectedIconPath: require("././assets/tabbar/connect_selected.png"),
        text: '好友'
      }, {
        pagePath: "/pages/academy/index",
        iconPath: require("././assets/tabbar/academy.png"),
        selectedIconPath: require("././assets/tabbar/academy_selected.png"),
        text: '学院'
      }, {
        pagePath: "/pages/profile/index",
        iconPath: require("././assets/tabbar/profile.png"),
        selectedIconPath: require("././assets/tabbar/profile_selected.png"),
        text: '我的'
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  config = {
    pages: [
    // 'pages/index/index',
    "/pages/home/index", "/pages/connection/index", "/pages/academy/index", "/pages/profile/index"],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '医者无界',
      navigationBarTextStyle: 'black'
    },
    tabBar: { color: "#a6a6a6", selectedColor: "#07BFE3", backgroundColor: "white", borderStyle: 'black', list: [{ pagePath: "/pages/home/index", iconPath: require("././assets/tabbar/home.png"), selectedIconPath: require("././assets/tabbar/homt_selected.png"), text: '首页' }, { pagePath: "/pages/connection/index", iconPath: require("././assets/tabbar/connect.png"), selectedIconPath: require("././assets/tabbar/connect_selected.png"), text: '好友' }, { pagePath: "/pages/academy/index", iconPath: require("././assets/tabbar/academy.png"), selectedIconPath: require("././assets/tabbar/academy_selected.png"), text: '学院' }, { pagePath: "/pages/profile/index", iconPath: require("././assets/tabbar/profile.png"), selectedIconPath: require("././assets/tabbar/profile_selected.png"), text: '我的' }], mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/home/index',
            componentLoader: () => import( /* webpackChunkName: "home_index" */'./pages/home/index'),
            isIndex: true
          }, {
            path: '/pages/connection/index',
            componentLoader: () => import( /* webpackChunkName: "connection_index" */'./pages/connection/index'),
            isIndex: false
          }, {
            path: '/pages/academy/index',
            componentLoader: () => import( /* webpackChunkName: "academy_index" */'./pages/academy/index'),
            isIndex: false
          }, {
            path: '/pages/profile/index',
            componentLoader: () => import( /* webpackChunkName: "profile_index" */'./pages/profile/index'),
            isIndex: false
          }]} tabBar={this.state.__tabs} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/home/index" />
        </TabbarContainer>
        </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide();
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));