import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Image } from '@tarojs/components';
import Images from "../../assets/Images";
import './index.scss';

class LoadingView extends Taro.Component {
  render() {
    return <View className="loadingView-container">
    <Image className="loadingView-container__image" src={Images.loading} />
  </View>;
  }

}

export default LoadingView;