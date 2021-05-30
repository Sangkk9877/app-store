import React from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import tabForYou from './tabForYou';
import Rating from './Rating';
import Options from './Options';
import Family from './Family';
import Editor from './Editor';

const {width, height} = Dimensions.get('screen');
const renderScene = SceneMap({
  first: tabForYou,
  second: Rating,
  third: Options,
  four: Editor,
  five: Family,
});

const Game = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Cho bạn'},
    {key: 'second', title: 'Bảng xếp hạng'},
    {key: 'third', title: 'Loại'},
    {key: 'four', title: 'Lựa chọn của biên tập viên'},
    {key: 'five', title: 'Gia đình'},
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={{backgroundColor: 'green'}}
      style={{backgroundColor: 'white'}}
      renderLabel={({route, focused}) => {
        return (
          <View style={styles.tabarItem}>
            <Text
              numberOfLines={1}
              style={{
                color: focused ? 'green' : 'black',
                fontSize: 16,
              }}>
              {route.title}
            </Text>
          </View>
        );
      }}
    />
  );

  console.log('aaa');
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
    />
  );
};
export default Game;

const styles = StyleSheet.create({
  tabarItem: {
    height: height * 0.05,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabarLable: {
    height: '100%',
    // marginHorizontal: 20,
    borderBottomColor: 'green',
    borderBottomWidth: 3,
  },
});
