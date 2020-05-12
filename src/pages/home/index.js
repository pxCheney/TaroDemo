import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import api from '@API'

class Home extends Component {
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {

    // const data = await Taro.request({ url: 'http://localhost:8888/Home/HomeBanner' })
    const data = await api.getHomeBanner()
    console.log(data)
  }

  render () {
    return (
      <View>
        <Text>Home 首页1</Text>
      </View>
    )
  }
}

export default Home
