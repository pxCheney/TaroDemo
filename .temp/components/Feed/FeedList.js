import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import './FeedList.scss';

const DefaultTake = 10;

class FeedList extends Taro.Component {
  handleClick = item => {
    Taro.navigateTo({
      url: `/pages/home/feed/FeedDetail?FeedDetailId=${item.key}`
    });
    this.props.clickItem();
  };

  render() {
    const { feedList } = this.props;
    console.log(this.props);
    // if (!(Array.isArray(feedList) && feedList.length)) {
    //   return null
    // }

    return <View>
        {this.props.children}
        {Array.isArray(feedList) && feedList.length > 0 && feedList.map(item => {
        return (
          // <View key={item.key} className='feedList__item' onClick={this.handleClick.bind(this, item)}>
          <View key={item.key} className="feedList__item" onClick={() => this.handleClick(item)}>
              <Image src={item.Image} className="feedList__item-image" />
              <View className="feedList__item-right">
                <Text className="feedList__item-right__title">{item.mockTitle}</Text>
                <Text className="feedList__item-right__desc" numberOfLines={2}>{item.mockContent}</Text>
              </View>
            </View>
        );
      })}
      </View>;
  }
}

export default FeedList;