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
    title: 'Catwalk Beuaty',
    coin: '114.000',
    storage: '75',
    image:
      'https://freerangestock.com/thumbnail/47146/hand-of-a-businessman-holding-earth-globe--globalization-concep.jpg',
  },
  {
    id: '2',
    title: 'Makeover Run',
    coin: '',
    storage: '68',
    image:
      'https://freerangestock.com/thumbnail/140289/lovers-under-the-moonlight--romantic-couple-watching-the-night-.jpg',
  },
  {
    id: '3',
    title: 'Hair Challenge',
    coin: '20.000',
    storage: '74',
    image:
      'https://freerangestock.com/thumbnail/136490/network--technology-background.jpg',
  },
  {
    id: '4',
    title: 'Body Race',
    star: '',
    storage: '58',
    image:
      'https://freerangestock.com/thumbnail/47732/red-umbrella-mingling-with-grey-umbrellas--be-different-concept.jpg',
  },
  {
    id: '5',
    title: 'Draw It Story - Draw Life Story, Draw Puzzle',
    star: '',
    storage: '64',
    image:
      'https://freerangestock.com/thumbnail/39249/colorful-hands-up--happiness-or-help-concept.jpg',
  },
  {
    id: '6',
    title: 'Muscle Rush - Smash Running Game',
    star: '1.000',
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
        <Text numberOfLines={2} style={{fontSize: 16}}>
          {item.title}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{...styles.textOpacity, marginRight: item.coin ? 10 : 0}}>
            {item.coin}
          </Text>

          <Text style={styles.textOpacity}>{item.storage}MB</Text>
        </View>
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
    // backgroundColor: 'grey',
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
  textOpacity: {
    opacity: 0.5,
    fontSize: 12,
  },
});
