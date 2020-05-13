import Taro from '@tarojs/taro'
import querystring from 'querystring'

function queryParams (params) {
  return querystring.stringify(params)
}

export default function (url, method = 'GET') {
  return async params => {
    let completeUrl = `http://localhost:8888${url}`

    if (method === 'GET') {
      completeUrl = `${completeUrl}?${queryParams(params)}`
    }

    try {
      const response = await Taro.request({ url: completeUrl, method })
      const { data: { dataSource } } = response
      return dataSource
    } catch (error) {
      console.error('REQUEST-ERROR:', error)
    }
  }
}
