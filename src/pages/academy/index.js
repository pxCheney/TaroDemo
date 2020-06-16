import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Academy extends Component {
  componentDidMount() {
    console.log('componentDidMount---Academy')
  }

  render () {
    console.log('1')
    return (
      <View>
        <Text>Academy 学院</Text>
      </View>
    )
  }
}

export default Academy
