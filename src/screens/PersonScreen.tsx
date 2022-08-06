import {Button, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../Navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

interface RouterParams {
    id: number;
    name: string;
}
interface Props extends StackScreenProps<RootStackParams, 'Person'> {}
export const PersonScreen = ({navigation, route}: Props) => {
    const {changeUserName} = useContext(AuthContext);
    const params = route.params as RouterParams;
    useEffect(() => {
        navigation.setOptions({
            title: params.name ? params.name : 'Im a person',
            headerBackTitle: '',
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        changeUserName(params.name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
            <Button
                title="Go back"
                onPress={() => navigation.navigate('PageOne')}
            />
        </View>
    );
};
