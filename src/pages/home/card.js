import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import './card.scss'

class Card extends Component {
  static externalClasses = ['my-class']
  // static options = {
  //   addGlobalClass: true
  // }

  render() {
    return (
      <View>
        {/* <Text className={this.props.className}>this props test color</Text> */}
        <Text className='my-class'>test color</Text>
      </View>
    )
  }
}

export default Card
