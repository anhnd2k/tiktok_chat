import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';

const stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          options={{headerShown: false}}
          name="home"
          component={BottomTab}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
