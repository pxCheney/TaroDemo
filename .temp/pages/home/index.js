import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import api from "../../services/index";

class Home extends Taro.Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {

    // const data = await Taro.request({ url: 'http://localhost:8888/Home/HomeBanner' })
    const data = await api.getHomeBanner();
    console.log(data);
  };

  render() {
    return <View>
        <Text>Home 首页1</Text>
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