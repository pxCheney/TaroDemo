import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Academy extends Taro.Component {
  componentDidMount() {
    console.log('componentDidMount---Academy');
  }

  render() {
    return <View>
        <Text>Academy 学院</Text>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Academy;