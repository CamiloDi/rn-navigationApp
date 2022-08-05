import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from './ChatScreen';
import {ContactsScreen} from './ContactsScreen';
import {AlbumsScreen} from './AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/AppTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top: paddingTop} = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{
                paddingTop,
            }}
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route}) => ({
                tabBarPressColor: colors.primary,
                tabBarShowIcon: true,
                // tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbox-outline';
                            break;
                        case 'Contacts':
                            iconName = 'book-outline';
                            break;
                        case 'Albums':
                            iconName = 'albums-outline';
                            break;
                        default:
                            break;
                    }
                    return <Text style={{color}}> <Icon name={iconName} size={20} color={colors.primary} /></Text>;
                },
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
