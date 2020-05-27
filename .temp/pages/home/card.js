import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
// import './card.scss'

class Card extends Taro.Component {
  static externalClasses = ['my-class'];
  // static options = {
  //   addGlobalClass: true
  // }

  render() {
    return <View>
        {/* <Text className={this.props.className}>this props test color</Text> */}
        <Text className="my-class">test color</Text>
      </View>;
  }
}

export default Card;