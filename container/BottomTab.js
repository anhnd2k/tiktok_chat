import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Home from './screens/Home';
import SearchScreen from './screens/SearchScreen';
import CreateVideoScreen from './screens/CreateVideoScreen';
import MessageBoxScreen from './screens/MessageBoxScreen';
import AccoutScreen from './screens/AccoutScreen';
import {createStackNavigator} from '@react-navigation/stack';

import Images from '../components/Images';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

const SearchScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

const CreateVideoScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreateVideoScreen"
        component={CreateVideoScreen}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

const MessageBoxScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MessageBoxScreen"
        component={MessageBoxScreen}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

const AccoutScreenTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccoutScreen"
        component={AccoutScreen}
        options={{headerShown: false, title: ''}}
      />
    </Stack.Navigator>
  );
};

//base local

const base = (img, text, tintColor) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Image
        resizeMode="contain"
        style={{width: 23, height: 23, tintColor: tintColor}}
        source={img}
      />
      <Text
        style={{color: '#fff', marginTop: 5, fontSize: 11, color: tintColor}}>
        {text}
      </Text>
    </View>
  );
};

const BottomTap = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 83,
          backgroundColor: 'black',
          padding: 20,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const initColor = focused ? '#fff' : '#ccc';
          switch (route.name) {
            case 'Home':
              return base(Images.icon_home, 'Trang chủ', initColor);
            case 'SearchScreen':
              return base(Images.icon_search, 'Khám phá', initColor);
            case 'CreateVideoScreen':
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    width: 53,
                    height: 18,
                    borderRadius: 10,
                    overflow: 'hidden',
                    flexDirection: 'row',
                    position: 'relative',
                  }}>
                  <View
                    style={{
                      width: '50%',
                      height: '100%',
                      backgroundColor: '#00faee',
                    }}></View>
                  <View
                    style={{
                      width: '50%',
                      height: '100%',
                      backgroundColor: '#ff0254',
                    }}></View>
                  <View
                    style={{
                      position: 'absolute',
                      width: 43,
                      height: 33,
                      backgroundColor: '#fff',
                      top: 0,
                      bottom: 0,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{width: 15, height: 15}}
                      source={Images.icon_plus}
                    />
                  </View>
                </View>
              );
            case 'MessageBoxScreen':
              return base(Images.icon_message, 'Hộp thư', initColor);
            case 'AccoutScreen':
              return base(Images.icon_user, 'Tôi', initColor);
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="SearchScreen" component={SearchScreenTab} />
      <Tab.Screen name="CreateVideoScreen" component={CreateVideoScreenTab} />
      <Tab.Screen name="MessageBoxScreen" component={MessageBoxScreenTab} />
      <Tab.Screen name="AccoutScreen" component={AccoutScreenTab} />
    </Tab.Navigator>
  );
};

export default BottomTap;
