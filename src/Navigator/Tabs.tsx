import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {TabOneScreen} from '../screens/TabOneScreen';
// import {TabTwoScreen} from '../screens/TabTwoScreen';
// import {TabThreeScreen} from '../screens/TabThreeScreen';
import {StackNavigator} from './StackNavigator';
import {colors} from '../theme/AppTheme';
import {Platform, Text} from 'react-native';
import {TopTabNavigator} from '../screens/TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};


const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottonTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color, focused}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabOneScreen':
                            iconName = 'airplane-outline';
                            break;
                        case 'TabTwoScreen':
                            iconName = 'tablet-portrait-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'file-tray-stacked-outline';
                            break;
                        default:
                            break;
                    }
                    return <Text style={{color}}><Icon name={iconName} size={20} color={'white'} /></Text>;
                },
            })}
        >
            <BottonTabIOS.Screen name="TabOneScreen" options={{title: 'Tab One'}} component={TabOneScreen} />
            <BottonTabIOS.Screen name="TabTwoScreen" options={{title: 'Tab Two'}} component={TopTabNavigator} />
            <BottonTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
        </BottonTabAndroid.Navigator >
    );
};


const BottonTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottonTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    // borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({color, focused, size}) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'TabOneScreen':
                            iconName = 'T1';
                            break;
                        case 'TabTwoScreen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'SN';
                            break;
                        default:
                            break;
                    }
                    return <Text style={{color}}>{iconName}</Text>;
                },
            })}>
            <BottonTabIOS.Screen name="TabOneScreen" options={{title: 'Tab One'}} component={TabOneScreen} />
            <BottonTabIOS.Screen name="TabTwoScreen" options={{title: 'Tab Two'}} component={TopTabNavigator} />
            <BottonTabIOS.Screen name="StackNavigator" options={{title: 'Stack'}} component={StackNavigator} />
        </BottonTabIOS.Navigator>
    );
};
