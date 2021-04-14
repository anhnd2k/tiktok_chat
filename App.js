import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import BottomTap from './container/BottomTab';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './container/AppNavigator';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
