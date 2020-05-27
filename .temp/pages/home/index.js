import Nerv from "nervjs";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading } from "@tarojs/taro-h5";
import { View, Text, ScrollView } from '@tarojs/components';
import LoadingView from "../../components/LoadingView/index";
import HomeBanner from "../../components/Home/HomeBanner";
import FeedList from "../../components/Feed/FeedList";
import { getWindowHeight } from "../../utils/utils";
import api from "../../services/index";
import Card from './card';
import './indes.scss';

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
    console.log('HOME--componentDidMount');
    this.getHomeBanner();
    this.getFeedList();
  }

  componentWillMount() {
    console.log('HOME--componentWillMount');
  }

  componentWillUnmount() {
    console.log('HOME--componentWillUnmount');
  }

  componentDidShow() {
    console.log('HOME--componentDidShow');
  }

  componentDidHide() {
    console.log('HOME--componentDidHide');
  }

  getHomeBanner = async () => {
    try {
      // this.setState({ loading: true })
      _showLoading({
        title: 'loading'
      });
      const bannerData = await api.getHomeBanner();
      setTimeout(() => {
        this.setState({
          loading: false,
          bannerData
        });
        _hideLoading();
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
        <Text>列表的Title11</Text>
      </View>;
  };

  onScrollToUpper = () => {
    console.log('onScrollToUpper');
  };

  render() {
    const { loading, bannerData, feedList } = this.state;
    if (loading) {
      return <LoadingView />;
    }
    return <ScrollView scrollY className="feedList" upperThreshold={20} onScrollToUpper={this.onScrollToUpper} onScrollToLower={this.loadRecommend} style={{ height: getWindowHeight() }}
    // refresherEnabled
    // refresherThreshold='45'
    // refresherDefaultStyle='black'
    // refresherBackground='#f50'
    >
        <HomeBanner data={bannerData} />
        <Card my-class="red-text" />
        <FeedList feedList={feedList} clickItem={this.clickItem}>
          {this.renderTitle()}
        </FeedList>
      </ScrollView>;
  }
}

export default Home;