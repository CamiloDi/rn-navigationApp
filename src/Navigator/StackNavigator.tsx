import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {PageOneScreen} from '../screens/PageOneScreen';
import {PageTwoScreen} from '../screens/PageTwoScreen';
import {PageThreeScreen} from '../screens/PageThreeScreen';
import {PersonScreen} from '../screens/PersonScreen';

export type RootStackParams = {
    PageOne: undefined;
    PageTwo: undefined;
    PageThree: undefined;
    Person: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName=''
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                cardStyle: {backgroundColor: 'white'},
            }}
        >
            <Stack.Screen
                name="PageOne"
                options={{title: 'Page 1'}}
                component={PageOneScreen}
            />
            <Stack.Screen
                name="PageTwo"
                options={{title: 'Page 2'}}
                component={PageTwoScreen}
            />
            <Stack.Screen
                name="PageThree"
                options={{title: 'Page 3'}}
                component={PageThreeScreen}
            />
            <Stack.Screen
                name="Person"
                options={{title: 'Person Page'}}
                component={PersonScreen}
            />
        </Stack.Navigator>
    );
};
