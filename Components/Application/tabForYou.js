import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DATAFIRST = [
  {
    id: '1',
    title: 'Trình đọc mã quét QR - Trình quét mã QR miễn phí',
    storage: '6,5',
    image:
      'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-qr-code-vector-hidden-text-or-url-scanning-smartphone-technology-isolated-png-image_1886134.jpg',
  },
  {
    id: '2',
    title: 'Bluezone - Phát hiện tiếp xúc',
    storage: '33',
    image:
      'https://lh3.googleusercontent.com/proxy/wo7x_Y8jv8t5MO1yr2BY0gJxvyAn0IbS07cDmw0e7vPWJjwUh7ell4ZUWP4G6UOvUt04z87sVFY3H4XF45uNkGHyR4d76tUOu_xg-jaZayyNLr4yZcxlHx9K9OUBMA',
  },
  {
    id: '3',
    title: 'Nox Cleaner - Tăng tốc, Tối ưu hoá, Dọn rác đệm',
    storage: '21',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzxm73wqxKxmVI0j0lpQ6AL5aSzCI047_uKg&usqp=CAU',
  },
  {
    id: '4',
    title: 'Mesenger Life: Nhắn tin và gọi điện miễn phí',
    storage: '6,5',
    image:
      'https://png.pngtree.com/png-clipart/20190613/original/pngtree-messenger-logo-icon-png-image_3571405.jpg',
  },
];
const DATASECOND = [
  {
    id: '1',
    title: 'Shopee: Mua sắm online #1',
    storage: '91',
    image:
      'https://play-lh.googleusercontent.com/72H-H7JuK7bizqKiy9d_fOwBm-BsAJaP3nGYiwUnKCmH_RiLINI6UnAgW0s2bwxAtNCF',
  },
  {
    id: '2',
    title: 'TikTok',
    storage: '33',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWyyEGfM065wwlUxXvSM0e0Mdc2mTgLlxXFHdQq4o&amp;usqp=CAU',
  },
  {
    id: '3',
    title: 'Bigo Live - Live Stream, Video & Chat Trực Tuyến',
    storage: '21',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHRRQOz9zCEslTOi-koCsU6vUFYwh3yrd1Bc9uP-aV939aLPO&usqp=CAU',
  },
  {
    id: '4',
    title: 'Facebook Life',
    storage: '69',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5pjBqgwGgxUdpjTfFhNx88HivHFQzeFo-bsS61E&usqp=CAU',
  },
];
const {width, height} = Dimensions.get('screen');
const OptionHead = props => {
  return (
    <View style={styles.head}>
      <View style={styles.headLeft}>
        {props.hadAdverti == true ? (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>Quảng cáo </Text>
            <Entypo
              style={{marginHorizontal: 5}}
              name="dot-single"
              size={10}
              color="black"
            />
          </View>
        ) : null}
        <Text style={{fontSize: 22}}>{props.name}</Text>
      </View>
      {props.hadIcon == true ? (
        <AntDesign style={styles.headIcon} name="arrowright" size={22} />
      ) : null}
    </View>
  );
};

const renderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.itemWrap}>
      <View style={styles.ItemImage}>
        <Image
          style={{flex: 1, resizeMode: 'stretch'}}
          source={{uri: item.image}}
        />
      </View>
      <Text numberOfLines={2} style={styles.itemTitle}>
        {item.title}
      </Text>
      <Text style={styles.itemStorage}>{item.storage} MB</Text>
    </TouchableOpacity>
  );
};
export default function tabForYou() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <OptionHead
            name={'Đề xuất cho bạn'}
            hadAdverti={false}
            hadIcon={true}
          />
          <FlatList
            data={DATAFIRST}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View>
          <OptionHead
            name={'Đề xuất cho bạn'}
            hadAdverti={true}
            hadIcon={false}
          />
          <FlatList
            data={DATASECOND}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View>
          <OptionHead
            name={'Sự kiện có thời gian'}
            hadAdverti={false}
            hadIcon={false}
          />
          <TouchableOpacity style={styles.eventWrap}>
            <View style={styles.eventImage}>
              <Image
                style={{flex: 1, resizeMode: 'stretch'}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FJK8CMXKjUeYjRkJPbyiwBe59aPePHTPGg&usqp=CAU',
                }}
              />
            </View>
            <View style={styles.eventBody}>
              <Text style={{opacity: 0.5, fontSize: 16}}>
                TikTok • Kết thúc sau 3 ngày nữa
              </Text>
              <Text style={{fontSize: 18}}>
                Nâng tầm nhan sắc với những chuyên gia và su hướng làm đẹp mới
                nhất.
              </Text>
              <Text style={{fontSize: 18, color: 'green'}}>
                Xem thông tin chi tiết về sự kiện
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <OptionHead name={'Mạng xã hội'} hadAdverti={false} hadIcon={true} />
          <FlatList
            data={DATASECOND}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  headLeft: {
    flex: 9,
    flexDirection: 'row',
  },
  headIcon: {
    flex: 1,
  },
  itemWrap: {
    width: width * 0.25,
    aspectRatio: 1 / 2,
    flexDirection: 'column',
    marginRight: 10,
  },
  ItemImage: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 5,
  },
  itemTitle: {
    fontSize: 16,
    marginTop: 8,
    opacity: 0.9,
  },
  itemStorage: {
    fontSize: 16,
    opacity: 0.5,
    marginTop: 5,
  },
  eventWrap: {
    width: width * 0.8,
    aspectRatio: 1 / 0.9,
    flexDirection: 'column',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'gray',
  },
  eventImage: {
    height: '50%',
    overflow: 'hidden',
  },
  eventBody: {
    height: '50%',
    flexDirection: 'column',
    marginHorizontal: 15,
    justifyContent: 'space-around',
  },
});
