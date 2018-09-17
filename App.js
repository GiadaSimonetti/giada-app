import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';

export default class App extends React.Component {
  render() {
    return (
        <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BADA55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
      fontSize: 24,
      color: '#fff',
      fontWeight: '800',
      // paddingVertical: 5,
      // paddingHorizontal: 6,

  }
});
