import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerScreenProps} from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}
export const PageOneScreen = ({navigation}: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Menu"
                    onPress={() => {
                        navigation.toggleDrawer();
                    }}
                />
            ),
        });
    });

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page One Screen</Text>
            <Button
                title="Go to Page 2"
                onPress={() => navigation.navigate('PageTwo')}
            />
            <Text style={{marginVertical: 20, fontSize: 20}}>Navegate with params</Text>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{...styles.bigButton, backgroundColor: '#ff9427'}}
                    onPress={() =>
                        navigation.navigate('Person', {id: 1, name: 'Peter'})
                    }
                >
                    <Text style={styles.bigButtonText}>Peter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{...styles.bigButton, backgroundColor: '#5856D6'}}
                    onPress={() =>
                        navigation.navigate('Person', {id: 2, name: 'Gwen'})
                    }
                >
                    <Text style={styles.bigButtonText}>Gwen</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
