import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Profile extends Component {
  componentDidMount() {
    console.log('componentDidMount---Profile')
  }

  render () {
    return (
      <View>
        <Text>Profile 我的</Text>
      </View>
    )
  }
}

export default Profile
