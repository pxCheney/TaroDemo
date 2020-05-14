import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Connection extends Taro.Component {
  componentDidMount() {
    console.log('componentDidMount---connection');
  }

  render() {
    return <View>
        <Text>Connection 好友</Text>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Connection;