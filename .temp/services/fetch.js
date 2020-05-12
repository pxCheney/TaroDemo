import Taro, { request as _request } from "@tarojs/taro-h5";

export default function (url, method = 'GET') {
  return async () => {
    const completeUrl = `http://localhost:8888${url}`;

    try {
      const response = await _request({ url: completeUrl, method });
      const { data: { dataSource } } = response;
      return dataSource;
    } catch (error) {
      console.error('REQUEST-ERROR:', error);
    }
  };
}