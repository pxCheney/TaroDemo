import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import LoadingView from "../../components/LoadingView/index";
import HomeBanner from "../../components/Home/HomeBanner";
import api from "../../services/index";

class Home extends Taro.Component {
  state = {
    loading: false,
    bannerData: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
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

  render() {
    const { loading, bannerData } = this.state;
    if (loading) {
      return <LoadingView />;
    }
    return <View>
        <HomeBanner data={bannerData} />
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Home;