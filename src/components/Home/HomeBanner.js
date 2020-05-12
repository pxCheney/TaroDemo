import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './HomeBanner.scss'

class HomeBanner extends Component {
  render() {
    const { data } = this.props
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='#07BFE3'
          // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
          // previousMargin
          // nextMargin
        >
          {Array.isArray(data) && data.map(item => {
            return (
              <SwiperItem
                key={item.key}
                className='home-banner__swiper-item'
              >
                <Image
                  className='home-banner__swiper-item-img'
                  src={item.Image}
                />
              </SwiperItem>
            )
          })}
        </Swiper>
      </View>
    )
  }
}

export default HomeBanner
