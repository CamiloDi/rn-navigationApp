import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/Navigator/StackNavigator';
// import {BasicLateralMenu} from './src/Navigator/BasicLateralMenu';
import {PersonalizedLateralMenu} from './src/Navigator/PersonalizedLateralMenu';

const App = () => {
    return (
        <NavigationContainer>
            {/* <StackNavigator /> */}
            {/* <BasicLateralMenu /> */}
            <PersonalizedLateralMenu />
        </NavigationContainer>
    );
};

export default App;
