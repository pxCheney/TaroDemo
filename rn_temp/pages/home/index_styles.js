
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "src-components-LoadingView-index__loadingView-container--hF98G": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "src-components-LoadingView-index__loadingView-container__image--1LxRL": {
    "width": scalePx2dp(50),
    "height": scalePx2dp(50)
  },
  "src-components-Home-HomeBanner__home-banner--A2W0k": {
    "height": scalePx2dp(200),
    "overflow": "hidden"
  },
  "src-components-Home-HomeBanner__home-banner__swiper--d6QNl": {
    "height": scalePx2dp(200)
  },
  "src-components-Home-HomeBanner__home-banner__swiper-item--Bfsu2": {
    "width": "100%",
    "height": "100%"
  },
  "src-components-Home-HomeBanner__home-banner__swiper-item-img--2aJmE": {
    "width": "100%",
    "height": "100%"
  },
  "taro_page": {
    "height": "100%"
  }
})
