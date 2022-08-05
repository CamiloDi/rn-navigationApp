import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
export const TabThreeScreen = () => {
    useEffect(() => {
        console.log('TabThreeScreen');
    }, []);
    return (
        <View style={styles.container}>
            <Text>TAB THREE</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});
