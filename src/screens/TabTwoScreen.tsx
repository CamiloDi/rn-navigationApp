import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
export const TabTwoScreen = () => {
    useEffect(() => {
        console.log('TabTwoScreen');
    }, []);

    return (
        <View style={styles.container}>
            <Text>Tab TWO</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});
