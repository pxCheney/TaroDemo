
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
  "src-components-Feed-FeedList__feedList__item--2vm12": {
    "display": "flex",
    "flexDirection": "row",
    "marginTop": scalePx2dp(10)
  },
  "src-components-Feed-FeedList__feedList__item-image--2cwYN": {
    "width": scalePx2dp(50),
    "height": scalePx2dp(50),
    "borderRadius": scalePx2dp(25),
    "marginRight": scalePx2dp(10)
  },
  "src-components-Feed-FeedList__feedList__item-right--2Vsju": {
    "flexGrow": 1,
    "flexShrink": 1,
    "flexBasis": 0,
    "display": "flex",
    "flexDirection": "column",
    "backgroundColor": "#eee",
    "borderWidth": 0,
    "borderStyle": "solid",
    "borderColor": "#000000",
    "borderBottomWidth": scalePx2dp(0.5)
  },
  "src-components-Feed-FeedList__feedList__item-right__title--1_LNE": {
    "fontSize": scalePx2dp(8),
    "fontWeight": "500",
    "color": "#f50"
  },
  "src-components-Feed-FeedList__feedList__item-right__desc--3i95l": {
    "width": "100%",
    "fontSize": scalePx2dp(7)
  },
  "taro_page": {
    "height": "100%"
  }
})
