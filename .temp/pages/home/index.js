import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, ScrollView } from '@tarojs/components';
import LoadingView from "../../components/LoadingView/index";
import HomeBanner from "../../components/Home/HomeBanner";
import FeedList from "../../components/Feed/FeedList";
import { getWindowHeight } from "../../utils/utils";
import api from "../../services/index";

const Mock = require('mockjs/dist/mock');

const Random = Mock.Random;
const DefaultTake = 10;

class Home extends Taro.Component {
  state = {
    loading: false,
    bannerData: [],
    feedList: [],
    skip: 0
  };

  componentDidMount() {
    this.getHomeBanner();
    this.getFeedList();
  }

  getHomeBanner = async () => {
    try {
      this.setState({ loading: true });
      const bannerData = await api.getHomeBanner();
      setTimeout(() => {
        this.setState({
          loading: false,
          bannerData
        });
      }, 500);
    } catch (error) {
      console.log('PXhome-index-ERROR--', error);
    }
  };

  getFeedList = async (skip = 0) => {
    try {
      const { feedList } = this.state;
      const list = await api.getFeedList({ skip, take: DefaultTake });
      setTimeout(() => {
        this.setState({
          feedList: !skip ? list : [...feedList, ...list],
          canLoadMore: feedList.length >= DefaultTake,
          skip
        });
      }, 500);
    } catch (error) {
      console.log('PXhome-index-ERROR--', error);
    }
  };

  loadRecommend = () => {
    console.log('loadMore');
    const skip = this.state.skip + 10;
    this.getFeedList(skip);
  };

  clickItem = () => {
    console.log('clickItem');
  };

  renderTitle = () => {
    return <View>
        <Text>列表的Title</Text>
      </View>;
  };

  render() {
    const { loading, bannerData, feedList } = this.state;
    if (loading) {
      return <LoadingView />;
    }
    return <ScrollView scrollY className="feedList" onScrollToLower={this.loadRecommend} style={{ height: getWindowHeight() }}>
        <HomeBanner data={bannerData} />
        <FeedList feedList={feedList} clickItem={this.clickItem}>
          {this.renderTitle()}
        </FeedList>
      </ScrollView>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Home;