import React from 'react';
import {createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
// import {StackNavigator} from './StackNavigator';
import {useWindowDimensions, View, Image, Text} from 'react-native';
import {styles} from '../theme/AppTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const PersonalizedLateralMenu = () => {

    const {width} = useWindowDimensions();
    return (
        <Drawer.Navigator screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
            headerShown: false,
        }}
            drawerContent={(props) => <InternalMenu {...props} />}>
            <Drawer.Screen
                name="Tabs"
                // options={{title: 'Home'}}
                component={Tabs}
            />
            <Drawer.Screen
                name="Settings"
                // options={{title: 'Settings'}}
                component={SettingsScreen}
            />
        </Drawer.Navigator >
    );
};



const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image source={{uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg'}}
                    style={styles.avatar} />
            </View>

            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.buttonMenu}
                    onPress={() => navigation.navigate('Tabs')}>
                    <Text style={styles.textMenu}>
                        <Icon name="tablet-portrait-outline" size={30} color={'grey'} />
                        Tabs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonMenu}
                    onPress={() => navigation.navigate('Settings')}>
                    <Text style={styles.textMenu}>
                        <Icon name="settings-outline" size={30} color={'grey'} />
                        Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
