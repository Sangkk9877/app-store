import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    image: 'http://assets.stickpng.com/categories/8972.png',
    category: 'Câu đố',
  },
  {
    image: 'http://assets.stickpng.com/categories/8971.png',
    category: 'Chiến thuật',
  },
  {
    image: 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png',
    category: 'Dạng bảng',
  },
  {
    image:
      'https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/49133/optimized_large_thumb_Freebies.jpg',
    category: 'Đố vui',
  },
  {
    image:
      'https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/49133/optimized_large_thumb_Freebies.jpg',
    category: 'Đua xe',
  },
  {
    image: 'http://assets.stickpng.com/categories/175.png',
    category: 'Giáo dục',
  },
  {
    image: 'http://assets.stickpng.com/categories/83.png',
    category: 'Hành động',
  },
  {
    image: 'http://assets.stickpng.com/categories/324.png',
    category: 'Mô phỏng',
  },
  {
    image: 'http://assets.stickpng.com/categories/8971.png',
    category: 'Chiến thuật',
  },
  {
    image: 'http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png',
    category: 'Dạng bảng',
  },
  {
    image: 'http://assets.stickpng.com/thumbs/5cb78678a7c7755bf004c14c.png',
    category: 'Đố vui',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.wrap}>
      <View style={styles.image}>
        <Image style={{flex: 1}} source={{uri: item.image}} />
      </View>
      <Text style={styles.text}>{item.category}</Text>
    </View>
  );
};

export default function Options() {
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + ''}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrap: {
    width: width * 0.9,
    aspectRatio: 6 / 1,
    margin: 30,
    marginLeft: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: '80%',
    aspectRatio: 1 / 1,
    // backgroundColor: 'red',
    overflow: 'hidden',
  },
  text: {
    fontSize: 18,
    marginLeft: 30,
  },
});
