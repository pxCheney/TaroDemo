import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import './FeedList.scss';

const DefaultTake = 10;

class FeedList extends Taro.Component {
  render() {
    const { feedList } = this.props;
    // if (!(Array.isArray(feedList) && feedList.length)) {
    //   return null
    // }
    return <View>
        {Array.isArray(feedList) && feedList.length > 0 && feedList.map(item => {
        return <View key={item.key} className="feedList__item">
              <Image src={item.Image} className="feedList__item-image" />
              <View className="feedList__item-right-container">
                <Text className="feedList__item-title">{item.mockTitle}</Text>
                <Text className="feedList__item-desc">{item.mockContent}</Text>
              </View>
            </View>;
      })}
      </View>;
  }
}

export default FeedList;