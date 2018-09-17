import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TermsAndConditions = () => {
    return (
        <View style={styles.container}>
            <Text>
                Bacon ipsum dolor amet tenderloin tongue short loin biltong. Venison rump ham hock t-bone tongue. Flank tail frankfurter sirloin t-bone, corned beef kielbasa leberkas buffalo short loin porchetta pig. Tri-tip leberkas tongue salami rump andouille, pastrami turkey kevin picanha shank. Shoulder swine tenderloin kevin jerky prosciutto brisket pork chop drumstick sirloin ball tip pancetta capicola. Jowl cow andouille cupim salami pancetta alcatra tail frankfurter filet mignon beef ground round swine pig ham. Picanha leberkas meatball turducken short loin alcatra ball tip.
            </Text>
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


export default TermsAndConditions;
