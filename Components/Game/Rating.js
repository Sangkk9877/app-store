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
    title: 'Catwalk Beuaty',
    category: 'Thông thường',
    star: '4.4',
    storage: '75',
    image:
      'https://freerangestock.com/thumbnail/47146/hand-of-a-businessman-holding-earth-globe--globalization-concep.jpg',
  },
  {
    id: '2',
    title: 'Makeover Run',
    category: 'Đua xe',
    star: '3.9',
    storage: '68',
    image:
      'https://freerangestock.com/thumbnail/140289/lovers-under-the-moonlight--romantic-couple-watching-the-night-.jpg',
  },
  {
    id: '3',
    title: 'Hair Challenge',
    category: 'Hành động',
    star: '3.7',
    storage: '74',
    image:
      'https://freerangestock.com/thumbnail/136490/network--technology-background.jpg',
  },
  {
    id: '4',
    title: 'Body Race',
    category: 'Thông thường',
    star: '4.0',
    storage: '58',
    image:
      'https://freerangestock.com/thumbnail/47732/red-umbrella-mingling-with-grey-umbrellas--be-different-concept.jpg',
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
          <Text style={{fontSize: 18}}>{item.title}</Text>
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
          <TouchableOpacity style={styles.option}>
            <Text style={styles.textOption}>Mới</Text>
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
    flexDirection: 'column',
    marginLeft: 30,
  },
  textOpacity: {
    opacity: 0.5,
    fontSize: 14,
  },
});
