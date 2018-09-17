import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TouchableLink = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props._toggleTerms}>
                <Text>text!!!!</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginHorizontal: '10%',
        marginTop: 10,
        padding: 50,
    }
});


export default TouchableLink;
