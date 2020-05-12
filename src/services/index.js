import fetchRequest from './fetch'

export default {
  getHomeBanner: fetchRequest('/Home/homeBanner'),
  getFeedList: fetchRequest('/Feed/GetFeedList'),
}

