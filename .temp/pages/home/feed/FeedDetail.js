import Nerv from "nervjs";
import Taro, { switchTab as _switchTab } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

import './FeedDetail.scss';

class FeedDetail extends Taro.Component {

  config = {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '详情页',
    navigationBarTextStyle: 'black'

    // componentWillMount () {
    //   console.log('componentWillMount')
    // }

  };componentDidMount() {}
  // console.log('componentDidMount')


  // componentWillUnmount () {
  //   console.log('componentWillUnmount')
  // }

  // componentDidShow () {
  //   console.log('componentDidShow')
  // }

  // componentDidHide () {
  //   console.log('componentDidHide')
  // }


  onBack = () => {
    Taro.navigateBack({ message: 'go back' });
    // this.props.navigation.pop()
  };

  onHandleClick = () => {
    Taro.navigateTo({
      url: `/pages/home/feed/FeedDetail?title=${'再次进入哈哈哈哈哈'}`
    });
  };

  onSwitchTabbar = () => {
    // Taro.navigateTo({
    //   url: `/pages/connection/index`,
    // })

    console.log('PX', Taro.getCurrentPages().length);
    _switchTab({ url: '/pages/home/index' });
    _switchTab({ url: '/pages/connection/index' });
    // this.props.navigation.push({url: '/pages/connection/index'})
  };

  // onStartPullDownRefresh = () => {
  //   console.log('111')
  // }

  render() {
    return <View>
        <View onClick={this.onBack}>
          <Text>点击返回</Text>
          <Text>{`FeedDetailId--${this.$router.params.FeedDetailId}`}</Text>
          {/* <Text>{`FeedDetailId--${this.$router.params.FeedDetailId}==title->${decodeURIComponent(this.$router.params.title)}`}</Text>
           <Text>{decodeURIComponent(this.$router.params.title)}</Text> */}
        </View>

        <View onClick={this.onHandleClick}>
          <Text className="click-to-third-page">点击进入三级页面</Text>
        </View>

        <View onClick={this.onSwitchTabbar}>
          <Text>点击跳转tabbar1</Text>
        </View>

        {/* <View onClick={this.onStartPullDownRefresh}>
          <Text>点击下拉刷新</Text>
         </View> */}
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default FeedDetail;