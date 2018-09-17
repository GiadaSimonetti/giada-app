import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import LoginScreen from './Screens/LoginScreen';
// import { Constants } from 'expo';

 class LoginScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Twitter!</Text>
              <Text style={styles.subtitle}>@giada </Text>
            </View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
        height: 200,
        backgroundColor: '#73CFEF',
        alignItems: 'center',
        justifyContent: 'center',
  },
  title: {
      fontSize: 24,
      color: 'white',
  },
  subtitle: {
      fontSize: 18,
      fontWeight: '800',
      color: 'white',
  },
  input: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      margin: 20,
  }
});

  export default LoginScreen;
