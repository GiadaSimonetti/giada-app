import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Conditions = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
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
    }
});


export default Conditions;
