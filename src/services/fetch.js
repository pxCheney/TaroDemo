import Taro from '@tarojs/taro'

export default function (url, method = 'GET') {
  return async () => {
    const completeUrl = `http://localhost:8888${url}`
    
    try {
      const response = await Taro.request({ url: completeUrl, method })
      const { data: { dataSource } } = response
      return dataSource
    } catch (error) {
      console.error('REQUEST-ERROR:', error)
    }
  }
}
