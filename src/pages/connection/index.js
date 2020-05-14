import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Connection extends Component {
  componentDidMount() {
    console.log('componentDidMount---connection')
  }

  render () {
    return (
      <View>
        <Text>Connection 好友</Text>
      </View>
    )
  }
}

export default Connection
