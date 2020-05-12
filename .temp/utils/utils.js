import Taro, { showToast as _showToast } from "@tarojs/taro-h5";

export const toastLoading = () => _showToast({
  title: '加载中...',
  icon: 'loading',
  mask: true
});