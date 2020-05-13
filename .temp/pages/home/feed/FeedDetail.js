import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class FeedDetail extends Taro.Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidShow() {
    console.log('componentDidShow');
  }

  componentDidHide() {
    console.log('componentDidHide');
  }

  onBack = () => {
    Taro.navigateBack({ message: 'go back' });
    // this.props.navigation.pop()
  };

  render() {
    return <View>
        <View onClick={this.onBack}>
          <Text>点击返回</Text>
        </View>
        <Text>{`FeedDetailId--${this.$router.params.FeedDetailId}`}</Text>
      </View>;
  }
}

export default FeedDetail;