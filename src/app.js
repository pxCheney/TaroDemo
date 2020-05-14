/* eslint-disable react/sort-comp */
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/home/index',
      'pages/connection/index',
      'pages/academy/index',
      'pages/profile/index',
      'pages/home/feed/FeedDetail'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '医者无界',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#a6a6a6",
      selectedColor: "#07BFE3",
      backgroundColor: "white",
      borderStyle: 'black',
      list: [
        {
          pagePath: 'pages/home/index',
          iconPath: './assets/tabbar/home.png',
          selectedIconPath: './assets/tabbar/homt_selected.png',
          text: '首页'
        }, {
          pagePath: 'pages/connection/index',
          iconPath: './assets/tabbar/connect.png',
          selectedIconPath: './assets/tabbar/connect_selected.png',
          text: '好友'
        }, {
          pagePath: 'pages/academy/index',
          iconPath: './assets/tabbar/academy.png',
          selectedIconPath: './assets/tabbar/academy_selected.png',
          text: '学院'
        }, {
          pagePath: 'pages/profile/index',
          iconPath: './assets/tabbar/profile.png',
          selectedIconPath: './assets/tabbar/profile_selected.png',
          text: '我的'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
