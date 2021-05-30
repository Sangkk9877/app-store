import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const DATAONE = [
  {
    title: 'Toca Kitchen 2',
    storage: 85,
    image:
      'https://freerangestock.com/thumbnail/39262/hands-typing-on-laptop-keyboard--fuzzy-looks.jpg',
  },
  {
    title: 'Masha và chú gấu. Trò chơi giáo dục',
    storage: 27,
    image:
      'https://freerangestock.com/thumbnail/39273/hand-creating-a-lightbulb-with-green-tree--ecology-and-life-con.jpg',
  },
  {
    title: 'Hot Wheels Unlimited',
    storage: 76,
    image:
      'https://freerangestock.com/thumbnail/47146/hand-of-a-businessman-holding-earth-globe--globalization-concep.jpg',
  },
  {
    title: 'Unblock',
    storage: 44,
    image:
      'https://freerangestock.com/thumbnail/41205/businessman-leader-rising-in-a-hot-air-balloon--leadership-conc.jpg',
  },
  {
    title: 'hocus',
    storage: 99,
    image:
      'https://freerangestock.com/thumbnail/65053/thoughtful-woman-on-the-mountain-face.jpg',
  },
  {
    title: 'Trò chơi toán học',
    storage: 29,
    image:
      'https://freerangestock.com/thumbnail/48364/programmer-at-the-desk.jpg',
  },
  {
    title: 'Trò chơi xe tải cho trẻ em',
    storage: 49,
    image:
      'https://freerangestock.com/thumbnail/39174/japan-flag-with-businessman-showing-a-superhero-suit--pulling-s.jpg',
  },
];
const DATATWO = [
  {
    title: 'Chibi Búp Bê - Người Tạo Hình Đại Diện',
    storage: 42,
    image:
      'https://freerangestock.com/thumbnail/119767/businessman-on-arrow-over-cityscape--growth-and-success-concept.jpg',
  },
  {
    title: 'sand:box',
    storage: 2.4,
    image:
      'https://freerangestock.com/thumbnail/39591/a-romantic-couple-enjoying-the-sunset-in-a-tropical-island.jpg',
  },
  {
    title: 'Màu công chúa trò chơi',
    storage: 76,
    image:
      'https://freerangestock.com/thumbnail/61058/learning-and-education--brain-functions-development-concept.jpg',
  },
  {
    title: 'Trang màu Mandala',
    storage: 44,
    image:
      'https://freerangestock.com/thumbnail/39010/into-thin-air--base-jumping-off-trolltunga--extreme-sports-in-norway.jpg',
  },
  {
    title: 'hocus',
    storage: 99,
    image:
      'https://freerangestock.com/thumbnail/119650/technology-background--digital-hand.jpg',
  },
  {
    title: 'Trộn màu',
    storage: 29,
    image:
      'https://freerangestock.com/thumbnail/119751/ramadan-mubarak-silhouette.jpg',
  },
  {
    title: 'Trò chơi xe tải cho trẻ em',
    storage: 49,
    image:
      'https://freerangestock.com/thumbnail/39174/japan-flag-with-businessman-showing-a-superhero-suit--pulling-s.jpg',
  },
];

const renderOne = ({item}) => {
  return (
    <TouchableOpacity style={styles.renderOneWrap}>
      <View style={styles.renderOneImage}>
        <Image source={{uri: item.image}} style={{flex: 1}} />
      </View>
      <Text style={{marginTop: 5}} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={{opacity: 0.7, marginTop: 5}}>{item.storage}MB</Text>
    </TouchableOpacity>
  );
};
const HeadOption = props => {
  return (
    <View style={styles.headWrap}>
      <Text style={styles.headText}>{props.text}</Text>
      <AntDesign name="arrowright" size={25} />
    </View>
  );
};
const {width, height} = Dimensions.get('screen');
export default function Family() {
  return (
    <View style={styles.container}>
      <View style={styles.optionAge}>
        <ScrollView horizontal>
          <TouchableOpacity>
            <Text style={styles.textOption}>5 tuôỉ trở xuống</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textOption}>6-8 tuổi</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textOption}>9 tuôỉ trở lên</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textOption}>Danh mục</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView>
        <View>
          <HeadOption text={'Đề xuất cho bạn'} />
          <ScrollView>
            <FlatList
              data={DATAONE}
              renderItem={renderOne}
              keyExtractor={item => item.id}
              horizontal
            />
          </ScrollView>
        </View>
        <View>
          <HeadOption text={'Hoạt động cho trẻ'} />
          <ScrollView>
            <FlatList
              data={DATATWO}
              renderItem={renderOne}
              keyExtractor={item => item.id}
              horizontal
            />
          </ScrollView>
        </View>
        <View>
          <HeadOption text={'Danh mục giành cho trẻ'} />
          <View style={styles.optionChildren}>
            <View style={styles.optionChildrenItems}>
              <View style={styles.optionChildrenItem}>
                <Entypo
                  style={styles.optionChildrenIcon}
                  name="tablet-mobile-combo"
                  size={28}
                  color="green"
                />
                <Text style={styles.optionChildrenText}>Chơi đóng vai</Text>
              </View>
              <View style={styles.optionChildrenItem}>
                <Entypo
                  style={styles.optionChildrenIcon}
                  name="book"
                  size={28}
                  color="green"
                />
                <Text style={styles.optionChildrenText}>Giáo dục</Text>
              </View>
            </View>
            <View style={styles.optionChildrenItems}>
              <View style={styles.optionChildrenItem}>
                <Entypo
                  style={styles.optionChildrenIcon}
                  name="paper-plane"
                  size={28}
                  color="green"
                />
                <Text numberOfLines={2} style={styles.optionChildrenText}>
                  Hành động & phiêu lưu
                </Text>
              </View>
              <View style={styles.optionChildrenItem}>
                <Text style={{fontSize: 18, marginHorizontal: 20}}>+3</Text>
                <Text style={styles.optionChildrenText}>Xem thêm</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <HeadOption text={'Đề xuất cho bạn'} />
          <ScrollView>
            <FlatList
              data={DATAONE}
              renderItem={renderOne}
              keyExtractor={item => item.id}
              horizontal
            />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  optionAge: {
    flexDirection: 'row',
  },
  textOption: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 5,
    fontSize: 16,
    marginVertical: 20,
    marginRight: 10,
  },
  headWrap: {
    width: width * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headText: {
    fontSize: 22,
    fontWeight: '400',
  },
  renderOneWrap: {
    width: width * 0.2,
    aspectRatio: 4 / 7,
    marginRight: 15,
    marginVertical: 20,
  },
  renderOneImage: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  optionChildren: {
    flexDirection: 'column',
  },
  optionChildrenItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginTop: 20,
  },
  optionChildrenItem: {
    width: width * 0.42,
    aspectRatio: 2 / 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  optionChildrenText: {
    width: '40%',
    color: 'rgba(0,0,0,0.8)',
    fontSize: 16,
  },
  optionChildrenIcon: {
    paddingHorizontal: 20,
  },
});
