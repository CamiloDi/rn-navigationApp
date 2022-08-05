import {Text, View, Button} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const PageThreeScreen = ({navigation}: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page Three Screen</Text>
            <Button title="Go back" onPress={() => navigation.pop()} />
            <Button title="Go to start" onPress={() => navigation.popToTop()} />
        </View>
    );
};
