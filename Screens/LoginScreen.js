import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TouchableLink from './TouchableLink';
import TermsAndConditions from './TermsAndConditions';


class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {showTerms: false};
        this.toggleTerms = this.toggleTerms.bind(this);

    }
    toggleTerms() {
        this.setState(previousState => {
            return { showTerms: !previousState.showTerms };
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Twitter!</Text>
                    <Text style={styles.subtitle}>@giada </Text>
                </View>
                <View style={styles.bodyForm}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput style={styles.input} keyboardType='email-address'/>

                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} secureTextEntry={true}/>
                    <View style={styles.buttonContainer}>
                        <Button
                        onPress={onPressLogin}
                        title="Login"
                        />
                    </View>
                </View>
                < TouchableLink _toggleTerms={this.toggleTerms} />
                    {this.state.showTerms && <TermsAndConditions/>}
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
      width: '80%',
      marginHorizontal: '10%',
  },
  label: {
      width: '80%',
      marginHorizontal: '10%',
  },
  buttonContainer: {
      width: '80%',
      marginHorizontal: '10%',
      marginTop: 10,
      // borderRadius: '5',
  },
  bodyForm: {
      marginTop: 10,
  },
});

  export default LoginScreen;
