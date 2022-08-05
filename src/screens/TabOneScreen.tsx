import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, styles} from '../theme/AppTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const TabOneScreen = () => {
    const {top} = useSafeAreaInsets();

    useEffect(() => {
        console.log('TabOneScreen');
    }, []);

    return (
        <View style={{...styles.globalMargin, marginTop: top + 10}}>
            <Text style={styles.title}>Icons</Text>
            <Text>
                <Icon name="airplane-outline" size={80} color={colors.primary} />
                <Icon name="american-football-outline" size={80} color={colors.primary} />
                <Icon name="bluetooth-outline" size={80} color={colors.primary} />
                <Icon name="hand-left-outline" size={80} color={colors.primary} />
                <Icon name="finger-print-outline" size={80} color={colors.primary} />
            </Text>
        </View>
    );
};
