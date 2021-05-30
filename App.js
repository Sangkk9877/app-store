import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaProvider,
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './Components/Icon';

import Game from './Components/Game/Game';
import Application from './Components/Application/Application';

const {width, height} = Dimensions.get('screen');
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <View style={[styles.head, {...styles.shadow}]}>
        <TouchableOpacity>
          <Icon type="AntDesign" name="search1" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <TextInput placeholder="Tìm kiếm ứng dụng ..." />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon type="Feather" name="mic" size={25} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.avatar} />
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            height: height * 0.08,
            borderTopColor: 'rgba(0,0,0,0.2)',
            borderTopWidth: 2,
          },
        }}>
        <Tab.Screen
          name="tabOne"
          component={Game}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabWrap}>
                <Icon
                  type="Entypo"
                  name="game-controller"
                  color={focused ? 'green' : 'gray'}
                  size={20}
                />
                <Text style={{fontSize: 18, color: focused ? 'green' : 'gray'}}>
                  Trò chơi
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="tabTwo"
          component={Application}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabWrap}>
                <Icon
                  type="AntDesign"
                  name="appstore-o"
                  color={focused ? 'green' : 'gray'}
                  size={20}
                />
                <Text style={{fontSize: 18, color: focused ? 'green' : 'gray'}}>
                  Ứng dụng
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  head: {
    width: width * 0.85,
    aspectRatio: 9 / 1.4,

    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  avatar: {
    height: '70%',
    aspectRatio: 1 / 1,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginVertical: 15,
  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.22,
    elevation: 3,
  },
  tabWrap: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default App;
