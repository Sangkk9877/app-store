import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import TabForYou from './tabForYou';
import Rating from './Rating';
import Options from './Options';
import Editor from './Editor';
import Family from './Family';

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: TabForYou,
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
      style={{backgroundColor: 'white'}}
      renderLabel={({route, focused, color}) => {
        return (
          <Text style={{color: focused ? 'green' : 'black'}}>
            {route.title}
          </Text>
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
  fontHead: {},
});
