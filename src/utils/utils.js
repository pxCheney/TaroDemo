import Taro from '@tarojs/taro'

export const toastLoading = () => (
  Taro.showToast({
    title: '加载中...',
    icon: 'loading',
    mask: true
  })
)
