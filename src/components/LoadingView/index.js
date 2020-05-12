import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Images from '@ASSETS/Images'
import './index.scss'

const LoadingView = () => (
  <View className='loadingView-container'>
    <Image className='loadingView-container__image' src={Images.loading} />
  </View>
)

export default LoadingView
