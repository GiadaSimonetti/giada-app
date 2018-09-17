import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


 class LoginScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.title}>Twitter!</Text>
              <Text style={styles.subtitle}>@giada </Text>
            </View>
            <View style={styles.formBody}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType='email-address'/>

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry={true}/>
            <Button
              onPress={onPressLogin}
              title="Login"
            />
            </View>
        </View>
    );
  }
}

const onPressLogin = () => {
    alert('Booooooooooom');
    // console.log('I am alive');
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
      width: '90%',
  },
  label: {
      width: '90%',
  },
  formBody: {
      justifyContent: 'center',
      marginTop: 10,
  },
});

  export default LoginScreen;
