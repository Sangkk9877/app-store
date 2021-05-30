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
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');

const DATA = [
  {
    id: '1',
    title: 'VssID',
    category: 'Doanh nghiệp',
    star: '3.6',
    storage: '17',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoukrwPvmiUCfA7ynwRp_nXw9k9D7ZCIuYEQ&amp;usqp=CAU',
  },
  {
    id: '2',
    title: 'Bluezone - Phát hiện tiếp xúc',
    category: 'Sức khoẻ và thể hình',
    star: '4,7',
    storage: '33',
    image:
      'https://lh3.googleusercontent.com/proxy/wo7x_Y8jv8t5MO1yr2BY0gJxvyAn0IbS07cDmw0e7vPWJjwUh7ell4ZUWP4G6UOvUt04z87sVFY3H4XF45uNkGHyR4d76tUOu_xg-jaZayyNLr4yZcxlHx9K9OUBMA',
  },
  {
    id: '3',
    title: 'Zenly - Bản đồ của bạn và những người thương yêu',
    category: 'Hành động',
    star: '3.7',
    storage: '74',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZLW31c7F7Ia2NrmgWn5cU7WzqCasG2cgeQ&amp;usqp=CAU',
  },
  {
    id: '4',
    title: 'CapCut - Chỉnh sửa video',
    category: 'Xem và sửa video',
    star: '4.5',
    storage: '35',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXh2G8n-lxfXTuNA2HlhulyHmIU0zwh-cGd26WcI&amp;usqp=CAU',
  },
  {
    id: '5',
    title: 'Draw It Story - Draw Life Story, Draw Puzzle',
    category: 'Câu đố',
    star: '3.8',
    storage: '64',
    image:
      'https://freerangestock.com/thumbnail/39249/colorful-hands-up--happiness-or-help-concept.jpg',
  },
  {
    id: '6',
    title: 'Muscle Rush - Smash Running Game',
    category: 'Thông thường',
    star: '4.1',
    storage: '60',
    image:
      'https://freerangestock.com/thumbnail/136284/man-walking-alone-on-city-street.jpg',
  },
];

export default function Rating() {
  const renderItem = ({item}) => {
    return (
      <View style={styles.wrap}>
        <Text style={{marginHorizontal: 15}}>{item.id}</Text>
        <View style={styles.itemImage}>
          <Image style={{flex: 1}} source={{uri: item.image}} />
        </View>
        <View style={styles.imfor}>
          <Text numberOfLines={1} style={{fontSize: 18}}>
            {item.title}
          </Text>
          <Text style={styles.textOpacity}>{item.category}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textOpacity}>{item.star}</Text>
            <AntDesign
              style={{alignSelf: 'center'}}
              name="star"
              size={8}
              color="rgba(0,0,0,0.5)"
            />
            <Text style={{...styles.textOpacity, marginLeft: 15}}>
              {item.storage}MB
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.textOption}>Miễn phí phổ biến nhất</Text>
            <Entypo
              style={{marginRight: 20}}
              name="chevron-down"
              size={20}
              color="green"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.textOption}>Danh mục</Text>
            <Entypo
              style={{marginRight: 20}}
              name="chevron-down"
              size={20}
              color="green"
            />
          </TouchableOpacity>
        </ScrollView>
      </View>

      <FlatList
        style={{marginLeft: 20}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  head: {
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.05,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 50,
  },
  textOption: {
    color: 'green',
    fontSize: 16,
    marginHorizontal: 20,
  },
  wrap: {
    width: width * 0.9,
    aspectRatio: 5 / 1,
    // backgroundColor: 'grey',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height: '80%',
    aspectRatio: 1 / 1,
    backgroundColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imfor: {
    width: width * 0.5,
    flexDirection: 'column',
    marginLeft: 30,
  },
  textOpacity: {
    opacity: 0.5,
    fontSize: 14,
  },
});
