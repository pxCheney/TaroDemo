import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Profile extends Taro.Component {
  componentDidMount() {
    console.log('componentDidMount---Profile');
  }

  render() {
    return <View>
        <Text>Profile 我的</Text>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Profile;