import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/Navigator/StackNavigator';
// import {BasicLateralMenu} from './src/Navigator/BasicLateralMenu';
import {PersonalizedLateralMenu} from './src/Navigator/PersonalizedLateralMenu';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                {/* <StackNavigator /> */}
                {/* <BasicLateralMenu /> */}
                <PersonalizedLateralMenu />
            </AppState>
        </NavigationContainer>
    );
};

const AppState = ({children}: any) => {
    return (<AuthProvider>
        {children}
    </AuthProvider >);
};

export default App;

