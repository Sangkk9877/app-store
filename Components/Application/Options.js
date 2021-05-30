import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Icons from '../Icon';

const {width, height} = Dimensions.get('screen');
const DATA = [
  {
    category: 'Ăn uống',
    typeIcon: 'MaterialCommunityIcons',
    nameIcon: 'food-fork-drink',
  },
  {
    category: 'Bản đồ và hướng dẫn',
    typeIcon: 'MaterialCommunityIcons',
    nameIcon: 'map-search-outline',
  },
  {
    category: 'Cá nhân hoá',
    typeIcon: 'AntDesign',
    nameIcon: 'menuunfold',
  },
  {
    category: 'Công cụ',
    typeIcon: 'Entypo',
    nameIcon: 'tools',
  },
  {
    category: 'Doanh nghiệp',
    typeIcon: 'Fontisto',
    nameIcon: 'bar-chart',
  },
  {
    category: 'Giáo dục',
    typeIcon: 'FontAwesome',
    nameIcon: 'address-book',
  },
  {
    category: 'Gia đình',
    typeIcon: 'Ionicons',
    nameIcon: 'people',
  },
  {
    category: 'Giải trí',
    typeIcon: 'MaterialCommunityIcons',
    nameIcon: 'popcorn',
  },
  {
    category: 'Google Cast',
    typeIcon: 'AntDesign',
    nameIcon: 'googleplus',
  },
];

const renderItem = ({item}) => {
  return (
    <View style={styles.wrap}>
      <Icons
        style={styles.icon}
        type={item.typeIcon}
        name={item.nameIcon}
        size={40}
        color="green"
      />
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
        keyExtractor={item => item.category}
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
  icon: {
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    marginLeft: 30,
    opacity: 0.9,
  },
});
