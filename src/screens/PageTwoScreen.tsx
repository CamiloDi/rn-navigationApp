import {Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../theme/AppTheme';
import {useNavigation} from '@react-navigation/core';

export const PageTwoScreen = () => {
    const navigator = useNavigation();
    const PAGE_3: string = 'PageThree';

    useEffect(() => {
        navigator.setOptions({
            title: 'Im a new title',
            headerBackTitle: '',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page Two Screen</Text>
            <Button
                title="Go to Page 3"
                onPress={() => navigator.navigate(PAGE_3)}
            />
        </View>
    );
};
