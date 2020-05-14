
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "src-pages-home-feed-FeedDetail__click-to-third-page--1I2iV": {
    "marginTop": scalePx2dp(15),
    "color": "lightseagreen"
  },
  "taro_page": {
    "height": "100%"
  }
})
