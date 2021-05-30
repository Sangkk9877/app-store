import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    id: '1',
    title: 'Học ngoại ngữ cùng Memrise: tiếng Hàn, Anh',
    storage: '75',
    image:
      'https://3.bp.blogspot.com/2OsZ3LGw54bELLLkB6OFCLLyeXZdQHId3H0V4fWIrlUqdLsQIK5G3vvLnH35VA3-KA',
  },
  {
    id: '2',
    title: 'Waze - GPS, Bản đồ, Cảnh báo giao thông',
    storage: '80',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEKP3UXT0JrmFNItwNx5Oc8tMCA4WRi-kCQ&amp;usqp=CAU',
  },
  {
    id: '3',
    title: 'Hair Challenge',
    storage: '74',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgUznUG051meby3kTfyLzt9dZiijqZV7pc3g&amp;usqp=CAU',
  },

  {
    id: '4',
    title: 'Zenly - Bản đồ của bạn và những người thương yêu',
    storage: '58',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZLW31c7F7Ia2NrmgWn5cU7WzqCasG2cgeQ&amp;usqp=CAU',
  },
  {
    id: '5',
    title: 'Draw It Story - Draw Life Story, Draw Puzzle',
    storage: '64',
    image:
      'https://freerangestock.com/thumbnail/39249/colorful-hands-up--happiness-or-help-concept.jpg',
  },
  {
    id: '6',
    title: 'Muscle Rush - Smash Running Game',
    storage: '60',
    image:
      'https://freerangestock.com/thumbnail/136284/man-walking-alone-on-city-street.jpg',
  },
];
const renderItem = ({item}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.itemImage}>
        <Image style={{flex: 1}} source={{uri: item.image}} />
      </View>
      <View style={styles.imfor}>
        <Text numberOfLines={2} style={{fontSize: 16, marginTop: 10}}>
          {item.title}
        </Text>
        <Text style={styles.textStorage}>{item.storage}MB</Text>
      </View>
    </View>
  );
};
export default function Editor() {
  return (
    <View style={styles.container}>
      <View style={styles.headWrap}>
        <Text style={styles.headText}>T.chơi do BT chọn</Text>
        <AntDesign name="arrowright" size={25} />
      </View>
      <FlatList
        style={{marginLeft: 20}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {marginLeft: 20},
  headWrap: {
    width: width * 0.85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  headText: {
    fontSize: 22,
    fontWeight: '400',
  },
  wrap: {
    width: width * 0.25,
    aspectRatio: 1 / 1.5,
    marginVertical: 20,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
  },
  itemImage: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imfor: {
    flexDirection: 'column',
  },
  textStorage: {
    opacity: 0.5,
    fontSize: 12,
    marginTop: 5,
  },
});
