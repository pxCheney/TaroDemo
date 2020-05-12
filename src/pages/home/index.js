import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import LoadingView from '@COMPONENTS/LoadingView'
import HomeBanner from '@COMPONENTS/Home/HomeBanner'
import api from '@API'

class Home extends Component {
  state = {
    loading: false,
    bannerData: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    try {
      this.setState({ loading: true })
      const bannerData = await api.getHomeBanner()
      setTimeout(
        () => {
          this.setState({
            loading: false,
            bannerData
          })
        },
        500
      )
    } catch (error) {
      console.log('ERROR--', error)
    }
  }

  render () {
    const { loading, bannerData } = this.state
    if (loading) {
      return <LoadingView />
    }
    return (
      <View>
        <HomeBanner data={bannerData} />
      </View>
    )
  }
}

export default Home
