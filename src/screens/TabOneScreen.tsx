import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';

export const TabOneScreen = () => {
    const {top} = useSafeAreaInsets();

    useEffect(() => {
        console.log('TabOneScreen');
    }, []);

    return (
        <View style={{...styles.globalMargin, marginTop: top + 10}}>
            <Text style={styles.title}>Icons</Text>
            <Text>
                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="american-football-outline" />
                <TouchableIcon iconName="bluetooth-outline" />
                <TouchableIcon iconName="hand-left-outline" />
                <TouchableIcon iconName="finger-print-outline" />
            </Text>
        </View>
    );
};
