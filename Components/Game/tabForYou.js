import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ScrollViewBase,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const {width, height} = Dimensions.get('screen');

const OptionHead = props => {
  return (
    <View style={styles.optionHead}>
      <View style={{flex: 8.5, flexDirection: 'row', alignItems: 'center'}}>
        {props.hadAdverti == true ? (
          <View>
            <Text style={{fontSize: 16}}>Quảng cáo • </Text>
          </View>
        ) : null}
        <Text numberOfLines={1} style={{fontSize: 22}}>
          {props.option}
        </Text>
      </View>
      {props.hadIcon == true ? (
        <AntDesign style={{flex: 1.5}} name="arrowright" size={22} />
      ) : null}
    </View>
  );
};
const DATAFIRST = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaf3nWjMYnveU9iv3AZhMbQA4tSZ-joX6_w&amp;usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaf3nWjMYnveU9iv3AZhMbQA4tSZ-joX6_w&amp;usqp=CAU',
    name: '8 Ball Pool',
    category: 'Thể thao',
    nameCategory: 'Bi-a',
    star: '4,6',
    storage: '61',
  },
  {
    id: '2',
    image:
      'https://www.chess.com/bundles/web/images/offline-play/standardboard.6a504885.png',
    imageSmall:
      'https://www.chess.com/bundles/web/images/offline-play/standardboard.6a504885.png',
    name: 'Cờ vua - Chơi và học ',
    category: 'Cờ bàn',
    nameCategory: 'Cờ vua',
    star: '4,6',
    storage: '34',
  },
  {
    id: '3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsADQscmKQMy2_3xrJaZgqWZPC9uVbMqHeHpgqC-zImUClOxdlWJsrCuM_sD2CiR1L_B0&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsADQscmKQMy2_3xrJaZgqWZPC9uVbMqHeHpgqC-zImUClOxdlWJsrCuM_sD2CiR1L_B0&usqp=CAU',
    name: 'Thế giới của bé gấu trúc',
    category: 'Giáo dục',
    nameCategory: 'Mô phỏng',
    star: '4,4',
    storage: '56',
  },
  {
    id: '4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiWuePtgHxWLH0Z7VP87mn7Q1oFddcWj40A&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiWuePtgHxWLH0Z7VP87mn7Q1oFddcWj40A&usqp=CAU',
    name: 'Câu cá và cuộc sống',
    category: 'Thể thao',
    nameCategory: 'Mô phỏng',
    star: '4,3',
    storage: '72',
  },
];
const DATASECOND = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKgcQmWKv0LpoyUcbRcLQWmj_v07RhwKusw&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKgcQmWKv0LpoyUcbRcLQWmj_v07RhwKusw&usqp=CAU',
    name: 'Cờ vua - Chơi và học ',
    star: '4,6',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7diHuZ_1UVrb3rASdPFZ7fZ-Cwxgj2cA8A&amp;usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg7diHuZ_1UVrb3rASdPFZ7fZ-Cwxgj2cA8A&amp;usqp=CAU',
    name: 'Võ lâm truyền kỳ 1 Mobile',
    star: '3,6',
  },
  {
    id: '3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5OO74BUqFLs5xNenj9q_EKGMBRWcirAmxw&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-5OO74BUqFLs5xNenj9q_EKGMBRWcirAmxw&usqp=CAU',
    name: 'MU: Vượt Thời Đại - Funtap',
    star: '4,0',
  },
  {
    id: '4',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaf3nWjMYnveU9iv3AZhMbQA4tSZ-joX6_w&amp;usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKaf3nWjMYnveU9iv3AZhMbQA4tSZ-joX6_w&amp;usqp=CAU',
    name: '8 Ball Pool',
    star: '4,6',
  },
];
const DATATHIRD = [
  {
    id: '1',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2hGW-HAhX1FRXJx1YydRuSFHBJlphVNZ0A&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2hGW-HAhX1FRXJx1YydRuSFHBJlphVNZ0A&usqp=CAU',
    name: '8 Ball Pool',
    category: 'Thể thao',
    star: '4,4',
    storage: '60',
  },
  {
    id: '2',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2D5WgQ-Q_fdY7u7DIftJ5aFvt1w0DtZYk1Q&amp;usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2D5WgQ-Q_fdY7u7DIftJ5aFvt1w0DtZYk1Q&amp;usqp=CAU',
    name: 'Phá gạch nhiệm vụ',
    category: 'Trò chơi điện tử',
    star: '4,3',
    storage: '37',
  },
  {
    id: '3',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiWuePtgHxWLH0Z7VP87mn7Q1oFddcWj40A&usqp=CAU',
    imageSmall:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiWuePtgHxWLH0Z7VP87mn7Q1oFddcWj40A&usqp=CAU',
    name: 'Câu cá và cuộc sống',
    category: 'Thể thao',
    star: '4,3',
    storage: '72',
  },
];
const renderItemFirst = ({item}) => {
  return (
    <View style={styles.box}>
      <View style={styles.boxImage}>
        <Image
          style={{flex: 1, resizeMode: 'stretch'}}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.boxBody}>
        <View style={styles.boxBodyImage}>
          <Image
            style={{flex: 1, resizeMode: 'cover'}}
            source={{
              uri: item.imageSmall,
            }}
          />
        </View>
        <View style={styles.boxBodyImfor}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textProduct}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.textOpacity}>{item.category}</Text>
            <Entypo
              style={{marginHorizontal: 5}}
              name="dot-single"
              size={10}
              color="black"
            />
            <Text style={styles.textOpacity}>{item.nameCategory}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textOpacity}>{item.star}</Text>
              <AntDesign
                style={{alignSelf: 'center', ...styles.textOpacity}}
                name="star"
                size={10}
                color="black"
              />
            </View>
            <Text style={{marginLeft: 20, ...styles.textOpacity}}>
              {item.storage} MB
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const renderItemSecond = ({item}) => {
  return (
    <View style={styles.box}>
      <View style={styles.boxImage}>
        <Image
          style={{flex: 1, resizeMode: 'stretch'}}
          source={{
            uri: item.image,
          }}
        />
      </View>

      <View style={styles.boxBody}>
        <View style={[styles.boxBodyImage]}>
          <Image
            style={{flex: 1, resizeMode: 'cover'}}
            source={{
              uri: item.imageSmall,
            }}
          />
        </View>
        <View style={styles.boxBodyImfor}>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.textOpacity}>{item.star}</Text>
            <AntDesign
              style={{
                alignSelf: 'center',
                marginLeft: 3,
                ...styles.textOpacity,
              }}
              name="star"
              size={60}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const renderItemThird = ({item}) => {
  return (
    <View style={[styles.box, {width: width * 0.7}]}>
      <View style={[styles.boxImage]}>
        <Image
          style={{flex: 1, resizeMode: 'stretch'}}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.boxBody}>
        <View style={[styles.boxBodyImage, {width: '15%'}]}>
          <Image
            style={{flex: 1, resizeMode: 'cover'}}
            source={{
              uri: item.imageSmall,
            }}
          />
        </View>
        <View style={styles.boxBodyImfor}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.textProduct}>
            {item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.textOpacity}>{item.category}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textOpacity}>{item.star}</Text>
              <AntDesign
                style={{alignSelf: 'center', ...styles.textOpacity}}
                name="star"
                size={10}
                color="black"
              />
            </View>
            <Text style={{marginLeft: 20, ...styles.textOpacity}}>
              {item.storage} MB
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function tabForYou() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.option}>
          <OptionHead
            option="Khám phá các trò chơi đựợc chơi nhiều"
            hadIcon={true}
            hadAdverti={false}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATAFIRST}
            renderItem={renderItemFirst}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View style={styles.option}>
          <OptionHead
            option="Được đề xuất cho bạn"
            hadIcon={false}
            hadAdverti={true}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATASECOND}
            renderItem={renderItemSecond}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View style={styles.option}>
          <OptionHead
            option="Dựa trên hoạt động gần đây của bạn"
            hadIcon={true}
            hadAdverti={false}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATATHIRD}
            renderItem={renderItemThird}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View style={styles.option}>
          <OptionHead
            option="Được đề xuất cho bạn"
            hadIcon={false}
            hadAdverti={true}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATASECOND}
            renderItem={renderItemSecond}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  option: {
    flexDirection: 'column',
  },
  optionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginTop: 20,
  },
  box: {
    width: width * 0.45,
    flexDirection: 'column',
    marginRight: 15,
  },
  boxImage: {
    width: '100%',
    aspectRatio: 7 / 4,
    resizeMode: 'cover',
    borderRadius: 15,
    overflow: 'hidden',
  },
  boxBody: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  boxBodyImage: {
    width: '20%',
    aspectRatio: 1 / 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  boxBodyImfor: {
    width: '70%',
    flexDirection: 'column',
    marginLeft: 20,
  },
  textProduct: {
    fontSize: 17,
  },
  textOpacity: {
    opacity: 0.5,
    fontSize: 14,
  },
});
