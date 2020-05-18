import Nerv from "nervjs";
import Taro, { showActionSheet as _showActionSheet, showModal as _showModal } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Connection extends Taro.Component {
  componentDidMount() {
    console.log('componentDidMount---connection');
  }

  onHandleActionSheet = () => {
    _showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex);
      },
      fail: function (res) {
        console.log(res.errMsg);
      }
    });
  };

  onHandleModal = () => {
    _showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  };

  render() {
    return <View>
        <Text>Connection 好友</Text>
        <View onClick={this.onHandleActionSheet}>
          <Text>Action Sheet</Text>
        </View>
        <View onClick={this.onHandleModal}>
          <Text>Modal</Text>
        </View>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default Connection;